const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/students'

mongoose.connect(DB_URL).then(() => {
  console.log('mongo db connected')
})

const models = {
  STUDENT: {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    gender: { type: Number, require: true, enum: [0, 1] },
    hobbies: { type: String, require: true },
  },
}

for (let key in models) {
  mongoose.model(key, new mongoose.Schema(models[key]))
}

function getModel (name) {
  return mongoose.model(name)
}

module.exports = {
  getModel,
}
