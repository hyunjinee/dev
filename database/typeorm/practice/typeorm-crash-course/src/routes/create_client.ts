import express from 'express'
import { Client } from 'src/entities/client'

const router = express.Router()


router.post('/api/client', (req,res)=> {
    const {firstName, lastName, email, cardNumber, balance} = req.body

    // const client = Client.create({
    //     first_name: firstName, 
    //     last_name: lastName, 
    //     email,
    //     card_number: cardNumber,
    //     balance

    // })
})

export {
    router as createClientRouter
}