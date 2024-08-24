const express = require("express")
const app = express.Router()

const home = require('../controller/controller');

//, shorten, newpage, remove
//app.post('/short', shorten)

app.get('/', home)

//app.get('/:newLink', newpage)
//app.get('/delete/:id', remove)

module.exports = app