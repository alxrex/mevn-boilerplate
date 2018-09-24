// file: src/routes/cliente.js

const controller = require("../controllers/cliente")

function onError(res, message) {
  res.status(400).send({ message })
}

module.exports = {
  delete: [
    {
      pattern: '/cliente/:id',
      handler (req, res) {
        const id = req.params.id
        controller.removeById(id)
          .then(cliente => res.send(cliente))
          .catch(onError.bind(this, res))
      }
    }
  ],
  get: [
    {
      pattern: '/cliente',
      handler (req, res) {
        controller.listAll()
          .then(cliente => res.send(cliente))
          .catch(onError.bind(this, res))
      }
    },
    {
      pattern: '/cliente/:id',
      handler (req, res) {
        const id = req.params.id
        controller.getById(id)
          .then(cliente => res.send(cliente))
          .catch(onError.bind(this, res))
      }
    }
  ],
  post: [
    {
      pattern: '/cliente',
      handler (req, res) {
        const nombre    = req.body.nombre
        const telefono  = req.body.telefono
        const direccion = req.body.direccion
        const cruza     = req.body.cruza
        const email     = req.body.email
        const cp        = req.body.cp
        const created   = new Date()
        const created_by = 'Backend'
        controller.create(nombre, telefono, direccion, cruza, email, cp, created, created_by)
          .then(cliente => res.send(cliente))
          .catch(onError.bind(this, res))
      }
    }
  ],
  put: [
    {
      pattern: '/cliente/:id',
      handler (req, res) {
        const id = req.params.id
        const data = {
          nombre    : req.body.nombre,
          telefono  : req.body.telefono,
          direccion : req.body.direccion,
          cruza     : req.body.cruza,
          email     : req.body.email,
          cp        : req.body.cp,
          modified  : new Date(),
          modified_by : "Backend"
        }
        controller.updateById(id, data)
          .then(cliente => res.send(cliente)) 
          .catch(onError.bind(this, res))
      }
    }
  ]
}

