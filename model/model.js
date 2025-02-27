const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


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
const collection = mongoose.model('link', schema)

module.exports = collection

