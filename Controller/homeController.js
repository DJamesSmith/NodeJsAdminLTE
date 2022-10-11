exports.index = ((req, res) => {
    res.render('index', {
        title: 'AdminLTE 3 | Dashboard'
    })
})

exports.chartjs = ((req, res) => {
    res.render('chartjs', {
        title: 'AdminLTE 3 | ChartJS'
    })
})

exports.flot = ((req, res) => {
    res.render('flot', {
        title: 'AdminLTE 3 | Flot Charts'
    })
})

exports.inlineCharts = ((req, res) => {
    res.render('inlineCharts', {
        title: 'AdminLTE 3 | Inline Charts'
    })
})