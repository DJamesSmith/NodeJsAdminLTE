const express = require('express')
const Router = express.Router()
const homeController = require('../Controller/homeController')

Router.get('/', homeController.index)
Router.get('/chartjs', homeController.chartjs)
Router.get('/flot', homeController.flot)
Router.get('/inlineCharts', homeController.inlineCharts)

module.exports = Router