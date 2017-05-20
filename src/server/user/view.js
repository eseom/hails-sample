import Joi from 'joi'
import { server, models } from 'hails'

const { User } = models

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
