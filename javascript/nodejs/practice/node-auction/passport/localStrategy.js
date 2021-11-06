const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;



const bcrypt = require('bcrypt')
const User = require('../models/user')



module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const exUser = await User.findOne({where: {email}})
            if (exUser) {
                const result = await bcrypt.compare(password, exUser.password, (err,valid ) => {
                    if (err) {
                        console.log(err, "뭔데") 
                    }
                    if (valid) {
                        console.log("ㅔㅈ발")
                    }
                }); 
                if (result) {
                    done(null, exUser);
                }else {
                    done( null, false, {message: '비밀번호가 일치하지 않음'})
                }
            } else {
                done (null, false, {message: '가입되지 않은 회원이다.'})
            }
        } catch (error) {
            console.error(error)
            done(error)
        }
    }))
}