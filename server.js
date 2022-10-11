const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoute = require('./Router/homeRoute')
app.use(homeRoute)

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'charts')))

const port = 3000
app.listen(port, err => {
    if (!err) {
        console.log(`Server listening on PORT http://localhost:${port}`)
    } else {
        console.log('Unable to connect to localhost Server:', err)
    }
})