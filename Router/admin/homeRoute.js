const express = require('express')
const Router = express.Router()
const homeController = require('../../Controller/admin/homeController')

Router.get('/', homeController.index)
Router.get('/chartjs', homeController.chartjs)
Router.get('/flot', homeController.flot)
Router.get('/inline', homeController.inline)

module.exports = Router