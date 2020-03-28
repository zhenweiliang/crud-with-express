const express = require('express')
const artTemplate = require('express-art-template')
const bodyParser = require('body-parser')
const router = require('./router')     //use db.json
// const router=require('./router_mongo')  //use Mango Db
// const router=require('./router_mysql') //use mysql

const app = express()

//open public folder
app.use('/public', express.static('./public/'))
//templating engine
app.engine('html', artTemplate)
//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)
app.use((req, res) => {
  res.send('Page not Found 404')
})

app.listen(3000, function () {
  console.log('server is running')
})
