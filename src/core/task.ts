import { server, logger } from 'hails'

const { scheduler } = server

scheduler.register('/periodic-job', (job, done) => {
  logger.silly(`[periodic job] current date: ${new Date()}`)
  done()
})

scheduler.register('/simple-job', (job, done) => {
  logger.silly(`[simple job] ${JSON.stringify(job.data)}, current date: ${new Date()}`)
  done()
})