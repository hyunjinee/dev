const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const schedule = require('node-schedule')



const { Good, Auction, User }  =  require('../models')
const {isLoggedIn, isNotLoggedIn} = require('./middlewares')


const router = express.Router()

router.use((req,res,next) => {
    res.locals.user = req.user;
    next()
})

router.get('/', async (req,res,next) => {
    try {
        const goods = await Good.findAll({where: {SoldId: null}})
        res.render('main', {
            title: 'NodeAuction',
            goods
        })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.get('/join' , isNotLoggedIn, (req,res) => {
    res.render('join', {
        title: '회원가입 - NodeAuction'
    })
})

router.get('/good', isLoggedIn, (req,res) => {
    res.render('good', {title: '상품등록 - NodeAuction'})
})

try {
    fs.readdirSync('uploads')
} catch (error) {
    console.error('uploads 폴더가 없어서 uploads폴더를 생성한다.')
    fs.mkdirSync('uploads')
}

const upload = multer({
    storage: multer.diskStorage({
        destination(req,file, cb) {
            cb(null, 'uploads/')
        },
        filename(req,filename, cb) {
            const ext= path.extname(file.originalname)
            cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024}
})

router.post('/good', isLoggedIn, upload.single('img') , async (req,res,next)=> {
    try {
        const {name, price} = req.body;
        const good = await Good.create({
            OwnerId: req.user.id,
            name,
            img: req.file.filename,
            price,
        })
        const end = new Date()
        end.setDate(end.getDate() + 1)
        schedule.scheduleJob(end, async ()=> {
            const success = await Auction.findOne({
                where: { GoodId: good.id},
                order: [['bid', 'DESC']]
            })

            await Good.update({SoldId: success.UserId}, {where: {id: good.id}})
        })
        res.redirect('/')
    } catch (error) {
        console.error(error);
        next(error);
    }
})

router.get('/good/:id', isLoggedIn, async (req,res,next) => {
    try {
        const [good, auction] = await Promise.all([
            Good.findOne({
                where: {id: req.params.id},
                include: {
                    model: User,
                    as: 'Owner'
                }
            }),
            Auction.findAll({
                where: {goodId: req.params.id},
                include: {model: User},
                order: [['bid', 'ASC']]
            })
        ])
        res.render('auction', {
            title: `${good.name} - NodeAuction`,
            good,
            auction,
        })
    } catch (error) {
        console.error(error);
        next(error);
    }
})

module.exports = router;