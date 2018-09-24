// file: src/controllers/cliente.js

const Cliente = require('../models/cliente')

module.exports = {
  create (nombre, telefono, direccion, cruza, email, cp, created, created_by) {
    return new Cliente({
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
    return Cliente.findById(id)
  },
  listAll (mapId) {
    return Cliente.find({})
  },
  removeById (id) {
    return Cliente.remove({_id: id})
  },
  updateById (id, data) {
    return Cliente.findById(id).then(cliente => {

      cliente.nombre     = data.nombre
      cliente.telefono   = data.telefono
      cliente.direccion  = data.direccion
      cliente.cruza      = data.cruza
      cliente.email      = data.email
      cliente.cp         = data.cp
      cliente.modified    = data.modified
      cliente.modified_by = data.modified_by

      return cliente.save()
    })
  }
}
