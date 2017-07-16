const { server, logger } = require('hails')

const settings = {
  connection: {
    routes: {
      json: {
        space: 2,
      },
    },
  },
  modules: [
    'core'
  ]
}

server
  .init(settings)
  .then((done) => {
    done()
    logger.info('✅  server has started.')
  })