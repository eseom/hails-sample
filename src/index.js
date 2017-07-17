const { server, logger } = require('hails')
const HapiError = require('hapi-error')

const settings = {
  connection: {
    routes: {
      json: {
        space: 2,
      },
    },
  },
  modules: [
    'core',
  ],
  plugins: [
    HapiError,
  ],
}

server
  .init(settings)
  .then((done) => {
    done()
    logger.info('✅  server has started.')
  })
