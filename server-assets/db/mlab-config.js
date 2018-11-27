let mongoose = require('mongoose')
let connectionString = 'mongodb://student:student1@ds038888.mlab.com:38888/star-logs'
let connection = mongoose.connection

mongoose.connect(connectionString, { useMongoClient: true })
connection.on('error', err => {
  console.log('Error from Database: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})