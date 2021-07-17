import {createConnection} from 'typeorm'
import dotenv from 'dotenv'
import {Client} from './entities/client'
import express from 'express'
import { createClientRouter } from './routes/create_client'
dotenv.config()

const app = express()

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: 'hyunjin',
            password: 'leehj0110',
            database: 'typeorm',
            entities: [Client],
            synchronize:true
        })

        console.log('connected to postgres')


        app.use(express.json())
        app.use(createClientRouter)
        app.listen(8080, ()=> {
            "now running on port 8080"
        })
    } catch (error) {
        // console.error(error)
        // throw new Error('unable to connect to db')
        console.log("왜안돼ㅠㅠ");
        console.log('왜와이')
    }
}

main()