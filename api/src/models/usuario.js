const mongoose = require('mongoose')
const Schema = mongoose.Schema

var UsuarioSchema = new Schema({
  nombre: String,
	email: String,
	password: String
})

var Usuario = mongoose.model("Usuario", UsuarioSchema)
module.exports = Usuario
