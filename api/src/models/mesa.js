const mongoose = require('mongoose')
const Schema = mongoose.Schema

var MesaSchema = new Schema({
  nombre: String,
	x: Number,
	y: Number
})

var Mesa = mongoose.model("Mesa", MesaSchema)
module.exports = Mesa
