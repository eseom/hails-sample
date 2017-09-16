import * as Joi from 'joi'
import { server, logger } from 'hails'

const { scheduler } = server

server.route({
  method: 'get',
  path: '/hello/{name}',
  config: {
    tags: ['core', 'api'],
    validate: {
      params: {
        name: Joi.string().required(),
      },
    },
  },
  handler: (request, reply) => {
    logger.silly("this is a notice")
    reply({ result: `hello ${request.params.name}` })
  }
})

server.route({
  path: '/api/hello-hails',
  method: 'GET',
  config: {
    tags: ['core', 'api'],
  },
  handler: (request, reply) => {
    reply({ result: 'hello-hails' })
  }
})

server.route({
  path: '/api/invoke-a-simple-job',
  method: 'GET',
  config: {
    description: 'This api executes the simple-job',
    tags: ['core', 'api'],
  },
  handler: (request, reply) => {
    scheduler.now('/simple-job', {
      myData: 'This is a simple-job data'
    })
    reply({ result: 'Queued a job. Check the console if `simple job` was executed.' })
  }
})