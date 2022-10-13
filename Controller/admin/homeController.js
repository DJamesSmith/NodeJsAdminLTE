exports.index = ((req, res) => {
    res.render('index', {
        title: 'AdminLTE 3 | Dashboard',
        dashboardtitle: 'Dashboard'
    })
})

exports.chartjs = ((req, res) => {
    res.render('chartjs', {
        title: 'AdminLTE 3 | ChartJS',
        dashboardtitle: 'ChartJS Page'
    })
})

exports.flot = ((req, res) => {
    res.render('flot', {
        title: 'AdminLTE 3 | Flot Charts',
        dashboardtitle: 'Flot Page'
    })
})

exports.inline = ((req, res) => {
    res.render('inline', {
        title: 'AdminLTE 3 | Inline Charts',
        dashboardtitle: 'Inline Page'
    })
})