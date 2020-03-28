const mysql = require('mysql')
const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'students',
  port: 3306,
  dateStrings: true,
}

const connection = mysql.createConnection(DB_CONFIG)

module.exports = connection


