import { server, logger } from 'hails'
import settingsFile from '../../settings'

const settings = settingsFile[process.env.NODE_ENV || 'development']
const auth = (plugin, options, role) => {
  return {
    authenticate(request, reply) {
      console.log(request.yar.get('user'))
      reply.continue({
        credentials: {},
      })
    },
  }
}

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
