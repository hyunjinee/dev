const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
// allow cross-origin requests
app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema
}))




app.listen(4000, ()=> {
    console.log('Server is listening on port 4000')
})