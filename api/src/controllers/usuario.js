// file: src/controllers/usuario.js

const Usuario = require('../models/usuario')

module.exports = {
  create (nombre,email,password) {
    return new Usuario({
      nombre,
			email,
			password
    }).save()
  },
  getById (id) {
    return Usuario.findById(id)
  },
  listAll (mapId) {
    return Usuario.find({})
  },
  removeById (id) {
    return Usuario.remove({_id: id})
  },
  updateById (id, data) {
    return Usuario.findById(id).then(usuario => {

      usuario.nombre = data.nombre
			usuario.email = data.email
			usuario.password = data.password
			
      usuario.modified    = data.modified
      usuario.modified_by = data.modified_by

      return usuario.save()
    })
  }
}
