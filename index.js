const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/view')
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes/routes')

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log('Server Running in port ' + process.env.PORT)
})