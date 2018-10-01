// file: src/routes/mesa.js

const controller = require("../controllers/mesa")

function onError(res, message) {
  res.status(400).send({ message })
}

module.exports = {
  delete: [
    {
      pattern: '/mesa/:id',
      handler (req, res) {
        const id = req.params.id
        controller.removeById(id)
          .then(mesa => res.send(mesa))
          .catch(onError.bind(this, res))
      }
    }
  ],
  get: [
    {
      pattern: '/mesa',
      handler (req, res) {
        controller.listAll()
          .then(mesa => res.send(mesa))
          .catch(onError.bind(this, res))
      }
    },
    {
      pattern: '/mesa/:id',
      handler (req, res) {
        const id = req.params.id
        controller.getById(id)
          .then(mesa => res.send(mesa))
          .catch(onError.bind(this, res))
      }
    }
  ],
  post: [
    {
      pattern: '/mesa',
      handler (req, res) {
        const nombre				= req.body.nombre
				const x				= req.body.x
				const y				= req.body.y
				
        const created   = new Date()
        const created_by = 'Backend'
        controller.create(:functionParameters, created, created_by)
          .then(mesa => res.send(mesa))
          .catch(onError.bind(this, res))
      }
    }
  ],
  put: [
    {
      pattern: '/mesa/:id',
      handler (req, res) {
        const id = req.params.id
        const data = {
          nombre				: req.body.nombre,
				x				: req.body.x,
				y				: req.body.y,
				
          modified  : new Date(),
          modified_by : "Backend"
        }
        controller.updateById(id, data)
          .then(mesa => res.send(mesa)) 
          .catch(onError.bind(this, res))
      }
    }
  ]
}

