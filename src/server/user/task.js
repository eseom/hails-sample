import { server, logger } from 'hails'

server.scheduler.register('user.test', (job, done) => {
  logger.info('executed periodic task "user.test". see /settings.js')
  done()
})
