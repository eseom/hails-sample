import { server, logger } from 'hails'
import settingsFile from '../../settings'

const settings = settingsFile[process.env.NODE_ENV || 'development']

// custom auth handler
const auth = (plugin, options, role) => ({
  authenticate(request, reply) {
    request.user = request.yar.get('user')
    reply.continue({
      credentials: {},
    })
  },
})

settings.plugins = [
  // add a new hapi tv plugin
  require('tv'),
]

server
  .init(settings)
  .then((done) => {
    server.auth.scheme('memberRequired', auth)
    server.auth.strategy('memberRequired', 'memberRequired', {
      validateFunc: () => { },
    })

    done()
    logger.info(`server has started at ${server.info.uri}`)
  })
  .catch((e) => {
    logger.error(e)
  })
