const express = require('express')
const artTemplate = require('express-art-template')
const bodyParser = require('body-parser')
const router=require('./router')

const app = express()

//open public folder
app.use('/public',express.static('./public/'))
//templating engine
app.engine('html',artTemplate)
//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function () {
  console.log('server is running')
})
