const express = require('express')
const router = express.Router()
const crud = require('./crud')

router.get('/', function (req, res) {
  crud.findAll().then((data) => {
    res.render('index.html', { students: data })
  }).catch(() => {
    res.send('server error')
  })
})

router.get('/students/new', function (req, res) {
  res.render('new.html')
})

router.post('/students/new', function (req, res) {
  req.body.gender = parseInt(req.body.gender)
  crud.addStudent(req.body).
    then(() => {res.redirect('/') }).
    catch((err) => {throw err})
})

router.get('/students/edit', function (req, res) {
  req.query.id = parseInt(req.query.id)
  crud.getStudentById(req.query.id).
    then((data) => { res.render('edit.html', { student: data }) }).
    catch(() => { res.send('internal server error') })
})

router.post('/students/edit', function (req, res) {
  req.body.id = parseInt(req.body.id)
  req.body.gender = parseInt(req.body.gender)
  crud.editStudent(req.body).
    then(() => { res.redirect('/') }).
    catch(() => { res.send('server error')})

})

router.get('/students/delete', function (req, res) {
  req.query.id = parseInt(req.query.id)
  crud.deleteStudent(req.query.id).
    then(() => {res.redirect('/') }).
    catch(() => { res.send('internal server error') })

})

module.exports = router
