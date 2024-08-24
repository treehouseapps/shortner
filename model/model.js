const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Beki:78122775Beki@cluster0.6ypmi.mongodb.net/link')
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
