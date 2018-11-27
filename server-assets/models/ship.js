let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Ship'

let schema = new Schema({
  name: { type: String, required: true }

})

module.exports = mongoose.model(schemaName, schema)