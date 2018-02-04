export default ({ logger }) => [{
  name: '/core/periodic-job',
  handler(job, done) {
    logger.silly(`[periodic job] current date: ${new Date()}`)
    done()
  },
}]
