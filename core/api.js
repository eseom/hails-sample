const Joi = require('joi')
const { server, models: { User } } = require('hails')

server.route({
  path: '/api/load-info',
  method: 'get',
  config: {
    tags: ['api'],
  },
  handler: (request, reply) => {
    reply({
      message: 'this came from the api server.',
      time: Date.now(),
    })
  },
})

server.route({
  path: '/api/kue-test',
  method: 'post',
  config: {
    tags: ['api'],
  },
  handler: (request, reply) => {
    server.scheduler.now('core.test')
    reply({ result: true })
  },
})
