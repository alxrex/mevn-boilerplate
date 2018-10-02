// file: src/controllers/mesa.js

const Mesa = require('../models/mesa')

module.exports = {
  create (nombre,x,y) {
    return new Mesa({
      nombre,
			x,
			y
    }).save()
  },
  getById (id) {
    return Mesa.findById(id)
  },
  listAll (mapId) {
    return Mesa.find({})
  },
  removeById (id) {
    return Mesa.remove({_id: id})
  },
  updateById (id, data) {
    return Mesa.findById(id).then(mesa => {

      mesa.nombre = data.nombre
			mesa.x = data.x
			mesa.y = data.y
			
      mesa.modified    = data.modified
      mesa.modified_by = data.modified_by

      return mesa.save()
    })
  }
}
