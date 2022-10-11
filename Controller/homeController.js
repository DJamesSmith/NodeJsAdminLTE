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

exports.inline = ((req, res) => {
    res.render('inline', {
        title: 'AdminLTE 3 | Inline Charts'
    })
})