const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ClienteSchema = new Schema({
  :verticalDataTypeForModel
})

var Cliente = mongoose.model("Cliente", ClienteSchema)
module.exports = Cliente
