export default ({ logger, models }) => [{
  method: 'GET',
  path: '/',
  handler() {
    logger.debug('%o', models)
    return models.Car.findAll({})
  },
}]
