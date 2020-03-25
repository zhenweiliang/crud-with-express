const fs = require('fs')

function findAll () {
  return new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
      if (err) {reject(err)}
      resolve(JSON.parse(data).students)
    })
  })
}

function addStudent (newStudent) {
  return new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
      if (err) {reject(err)}
      const students = JSON.parse(data).students
      //new Student Id equal to current Max id + 1
      const studentIds = []
      for (let i = 0; i < students.length; i++) {
        studentIds.push(students[i].id)
      }
      newStudent.id = Math.max(...studentIds) + 1
      console.log(newStudent.id)
      students.push(newStudent)
      //
      fs.writeFile('./db.json', JSON.stringify({ students }), (err) => {
        if (err) reject(err)
        resolve('successfully added')
      })

    })
  })
}

function getStudentById (id) {
  return new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
      if (err) {reject(err)}
      const students = JSON.parse(data).students
      const result = students.find(item => item.id === id)
      resolve(result)
    })
  })
}

function editStudent (stu) {
  return new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
      if (err) {reject(err)}
      const students = JSON.parse(data).students
      const stuIndex = students.findIndex(item => item.id === stu.id)
      students.splice(stuIndex, 1, stu)

      fs.writeFile('./db.json', JSON.stringify({ students }), (err) => {
        if (err) reject(err)
        resolve('successfully Edited')
      })

    })
  })
}

function deleteStudent (id) {
  return new Promise((resolve, reject) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
      if (err) {reject(err)}
      let students = JSON.parse(data).students
      students = students.filter(item => item.id !== id)
      fs.writeFile('./db.json', JSON.stringify({ students }), (err) => {
        if (err) reject(err)
        resolve('successfully Delete')
      })

    })
  })
}

module.exports = {
  findAll,
  addStudent,
  getStudentById,
  editStudent,
  deleteStudent,
}
