const express = require('express')
const DB = require('./crud_mongo')
const router = express.Router()
const TableStudent = DB.getModel('STUDENT')

router.get('/', function (req, res) {
  TableStudent.find({}, function (err, data) {
    if (err) { throw err}
    res.render('index.html', { students: data })
  })
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
})

router.post('/students/new', function (req, res) {
  TableStudent.create(req.body, function (err) {
    if (err) {throw err}
    res.redirect('/')
  })
})

router.get('/students/edit', function (req, res) {
  TableStudent.findById(req.query.id, function (err, data) {
    if (err) {throw err}
    console.log(data)
    res.render('edit.html', { student: data })
  })
})

router.post('/students/edit', function (req, res) {
  TableStudent.update({ _id: req.body.id }, req.body, function (err) {
    if (err) throw err
    res.redirect('/')
  })
})

router.get('/students/delete', function (req, res) {
  TableStudent.remove({ _id: req.query.id }, function (err) {
    if (err) throw err
    res.redirect('/')
  })

})

module.exports = router





