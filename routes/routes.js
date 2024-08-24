const express = require("express")
const app = express.Router()

const { home, shorten, newpage, remove } = require('../controller/controller');

app.post('/short', shorten)
app.get('/', home)
app.get('/:newLink', newpage)
app.get('/delete/:id', remove)

module.exports = app