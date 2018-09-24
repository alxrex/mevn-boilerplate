// file: src/controllers/proveedor.js

const Proveedor = require('../models/proveedor')

module.exports = {
  create (nombre, telefono, direccion, cruza, email, cp, created, created_by) {
    return new Proveedor({
      nombre,
      telefono,
      direccion,
      cruza,
      email,
      cp,
      created,
      created_by
    }).save()
  },
  getById (id) {
    return Proveedor.findById(id)
  },
  listAll (mapId) {
    return Proveedor.find({})
  },
  removeById (id) {
    return Proveedor.remove({_id: id})
  },
  updateById (id, data) {
    return Proveedor.findById(id).then(proveedor => {

      proveedor.nombre     = data.nombre
      proveedor.telefono   = data.telefono
      proveedor.direccion  = data.direccion
      proveedor.cruza      = data.cruza
      proveedor.email      = data.email
      proveedor.cp         = data.cp
      proveedor.modified    = data.modified
      proveedor.modified_by = data.modified_by

      return proveedor.save()
    })
  }
}
