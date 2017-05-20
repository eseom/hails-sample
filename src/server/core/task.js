import { server, logger } from 'hails'

server.scheduler.register('core.test', (job, done) => {
  logger.info('executed task "core.test", waiting an async job for 3 seconds...')
  setTimeout(function () {
    logger.info('"core.test" completed.')
  }, 3000)
  done()
})
