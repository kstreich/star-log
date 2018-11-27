let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Comment'

let schema = new Schema({
  body: { type: String },
  author: { type: ObjectId, ref: 'User' },
  log: { type: ObjectId, ref: 'Log' },
  starDate: { type: Number, default: Date.now(), required: true }
})

module.exports = mongoose.model(schemaName, schema)