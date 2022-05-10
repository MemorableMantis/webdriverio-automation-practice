const report = require('multiple-cucumber-html-reporter')

const options = {
    jsonDir: './reports/json',
    reportPath: './reports/html',
    disableLog: true
}

report.generate(options)