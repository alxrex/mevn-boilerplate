const routers = [
  require('./post'),
  require('./cliente'),
  require('./mesa'),
  require('./usuario')
]

const routes = {
  init (server) {
    routers.forEach(router => {
      Object.keys(router).forEach(method => {
        router[method].forEach(route => {
          server[method](route.pattern, route.handler)
        })
      })
    })
  }
}

module.exports = routes