var express = require('express')
var port = process.env.port||3000
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./app/route/route');
routes(app)

app.listen(port)
console.log('RestFul API running on port: ' + port)
