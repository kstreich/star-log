let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Log'

let schema = new Schema({
  title: { type: String },
  body: { type: String },
  author: { type: ObjectId, ref: 'User' },
  shipID: { type: ObjectId, ref: 'Ship' },
  starDate: { type: Number, default: Date.now(), required: true }
})

module.exports = mongoose.model(schemaName, schema)