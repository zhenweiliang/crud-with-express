const mysql = require('./crud_mysql')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const sql = 'select * from student'
  mysql.query(sql, (err, result) => {
    if (err) throw err
    res.render('index.html', { students: result })
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')
})

router.post('/students/new', (req, res) => {
  const sql = 'INSERT INTO student SET ?'
  const param = req.body
  mysql.query(sql, param, (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) res.redirect('/')
  })

})

router.get('/students/edit', (req, res) => {
  const sql = 'select * from student where id = ?'
  const param = req.query.id
  mysql.query(sql, param, (err, result) => {
    if (err) throw err
    res.render('edit.html', { student: result[0] })
  })
})


router.post('/students/edit', (req, res) => {
  const sql = `UPDATE student SET name=?,age=?,gender=?,hobbies=? where id=?`
  const { name, age, gender, hobbies, id } = req.body
  const param = [name, age, gender, hobbies, id]
  mysql.query(sql, param, (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) res.redirect('/')
  })
})

router.get('/students/delete', (req, res) => {
  const sql = `delete from student where id = ?`
  const param = req.query.id
  mysql.query(sql, param, (err, result) => {
    if (err) throw err
    if (result.affectedRows > 0) res.redirect('/')
  })
})

module.exports = router
