const express = require('express')
const app = express()

const collection = require('../model/model')
// Retrve and Display from Database
const home = async (req, res) => {
    const result = await collection.find()
    res.render('index', { result })
}
// Shorten and save to database
const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const shorten = async (req, res) => {
    const orignalUrl = await 'https://' + req.body.link
    const oldExist = await collection.findOne({ link: orignalUrl })
    if (!oldExist) {
        let char = "";
        for (let i = 0; i < 5; i++) {
            const random = await Math.floor(Math.random() * character.length)
            char += character[random]
        }
        const newExist = await collection.findOne({ newLink: char })
        if (!newExist) {
            const compress = 'https://shortner-beta.vercel.app/' + char
            const generated = char
            await collection.insertMany({ link: orignalUrl, generated: generated, newLink: compress })
        }
    }
    const result = await collection.find()
    res.render('index', { result })
}
// Lead to The original Website
const newpage = async (req, res) => {
    const searchId = req.params.newLink
    const result = await collection.findOne({ generated: searchId })
    if (result) {
        res.redirect(result.link)
    }
    else {
        res.redirect('https://www.google.com')
    }
}
//Remove from Database
const remove = async (req, res) => {
    const getid = req.params.id
    await collection.deleteOne({ _id: getid })
    res.redirect('/')
}

module.exports = { home, shorten, newpage, remove };