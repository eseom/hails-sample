// @flow

const { server } = require('hails')

server.route({
  config: {
    description: 'a test json response',
    tags: ['api'],
  },
  path: '/',
  method: 'get',
  handler: (request, reply) => {
    reply({ result: 'a test json response' })
  },
})

server.route({
  config: {
    description: 'hello',
    tags: ['api'],
  },
  path: '/hello',
  method: 'get',
  handler: (request, reply) => {
    reply.view('hello', {
      title: 'title1',
      items: [[1, 'item1']],
    })
  },
})
