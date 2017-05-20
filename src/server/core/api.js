import Joi from 'joi'
import { server, models } from 'hails'

const { User } = models

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
