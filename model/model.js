const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DBCONNECTION)
    .then(console.log('Database Connected'))
    .catch(err => { console.log(err) })
const schema = new mongoose.Schema({
    link: {
        type: String
    },
    generated: {
        type: String
    },
    newLink: {
        type: String
    },
})
const collection = new mongoose.model('link', schema)
module.exports = collection