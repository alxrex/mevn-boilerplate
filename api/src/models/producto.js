const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ProductoSchema = new Schema({
  nombre: String,
  imagen: String,
  descripcion: String,
  precio: Double,
  costo: Double,
  cantidad: Integer,
  se_vende: Boolean,
  activo: Boolean,
  stock_minimo: Integer,
  stock_alerta: Integer,
  created: Timestamp,
  modified: Timestamp,
  created_by: String,
  modified_by: String

})

var Producto = mongoose.model("Producto", ProductoSchema)
module.exports = Producto
