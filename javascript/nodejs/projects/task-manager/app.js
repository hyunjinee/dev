require('dotenv').config()
const express = require('express')
const connectDB = require('./db/connect')
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()