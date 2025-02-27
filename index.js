const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const connection = require('./config/dbConfig')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/view')
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes/routes')

app.use('/', routes)
connection(process.env.DBCONNECTION)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server Running in port ' + process.env.PORT)
        })
    })
    .catch(() => { console.log('Error connection to database') })


module.exports = app