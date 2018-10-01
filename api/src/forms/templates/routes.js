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
        :constDataPostAssignation
        const created   = new Date()
        const created_by = 'Backend'
        controller.create(:functionParameters, created, created_by)
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
          :constDataPutAssignation
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

