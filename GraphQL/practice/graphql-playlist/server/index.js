const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express()

app.use('/graphql', graphqlHTTP({
    schema
}))




app.listen(4000, ()=> {
    console.log('Server is listening on port 4000')
})