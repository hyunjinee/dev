const express =require('express')

const session = require('express-session')



const dotenv = require('dotenv')
dotenv.config()
const indexRouter = require('./routes/index')
const passport =require('passport')
const authRouter = require('./routes/auth')
const {sequelize} = require('./models')
const passportConfig = require('./passport')
const nunjucks = require('nunjucks')
const morgan = require('morgan')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
passportConfig()


app.set('port' , process.env.PORT || 8010)
app.set('view engine', 'html')
nunjucks.configure('views', {
    express: app,
    watch: true
})

sequelize.sync({force: false})
.then(() => {
    console.log('디ㅣㅂ 연결 성공')
})
.catch((err)=> {
    console.error(err)
})


const sessionMiddleware = session ({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, 
        secure: false,
    }
})
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(express.urlencoded({extended: false,}))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(sessionMiddleware)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.use((req,res,next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니ㅏㄷ.`);
    error.status = 404;
    next(error);
})

app.use((err, req,res,next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {}
    res.status(err.status || 500)
    res.render('error')
})

app.use('/img', express.static(path.join(__dirname, 'uploads')))
app.listen(app.get('port'), () => {
    console.log('앱실행중')
})