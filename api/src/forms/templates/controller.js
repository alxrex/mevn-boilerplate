// file: src/controllers/cliente.js

const Cliente = require('../models/cliente')

module.exports = {
  create (:functionParameters) {
    return new Cliente({
      :verticalParameters
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

      :verticalUpdate
      cliente.modified    = data.modified
      cliente.modified_by = data.modified_by

      return cliente.save()
    })
  }
}
