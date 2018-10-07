// file: src/routes/usuario.js

const controller = require("../controllers/usuario")

function onError(res, message) {
  res.status(400).send({ message })
}

module.exports = {
  delete: [
    {
      pattern: '/usuario/:id',
      handler (req, res) {
        const id = req.params.id
        controller.removeById(id)
          .then(usuario => res.send(usuario))
          .catch(onError.bind(this, res))
      }
    }
  ],
  get: [
    {
      pattern: '/usuario',
      handler (req, res) {
        controller.listAll()
          .then(usuario => res.send(usuario))
          .catch(onError.bind(this, res))
      }
    },
    {
      pattern: '/usuario/:id',
      handler (req, res) {
        const id = req.params.id
        controller.getById(id)
          .then(usuario => res.send(usuario))
          .catch(onError.bind(this, res))
      }
    }
  ],
  post: [
    {
      pattern: '/usuario',
      handler (req, res) {
        const nombre			= req.body.nombre
				const email				= req.body.email
				const password		= req.body.password
        const created     = new Date()
        const created_by  = 'Backend'
        controller.create(nombre,email,password, created, created_by)
          .then(usuario => res.send(usuario))
          .catch(onError.bind(this, res))
      }
    }
  ],
  put: [
    {
      pattern: '/usuario/:id',
      handler (req, res) {
        const id = req.params.id
        const data = {
          nombre			: req.body.nombre,
				  email				: req.body.email,
				  password		: req.body.password,
          modified    : new Date(),
          modified_by : "Backend"
        }
        controller.updateById(id, data)
          .then(usuario => res.send(usuario)) 
          .catch(onError.bind(this, res))
      }
    }
  ]
}

