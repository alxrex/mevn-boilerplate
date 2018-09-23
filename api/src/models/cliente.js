const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ClienteSchema = new Schema({
  nombre: String,
  telefono: String,
  direccion: String,
  cruza: String,
  email: String,
  cp: String,
  created: Date,
  modified: Date,
  created_by: String,
  modified_by: String
})

var Cliente = mongoose.model("Cliente", ClienteSchema)
module.exports = Cliente
