const Joi = require('joi')
const { server, models: { User } } = require('hails')

server.route({
  path: '/user',
  method: 'get',
  config: {
    tags: ['api'],
  },
  handler: (request, reply) => {
    reply.view('user.html', {
      user: request.yar.get('user'),
    })
  },
})
