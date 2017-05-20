import Joi from 'joi'
import { server, models } from 'hails'

const { User } = models

server.route({
  path: '/user/login',
  method: 'post',
  config: {
    tags: ['api'],
    validate: {
      payload: {
        username: Joi.string().required(),
      },
    },
  },
  handler: (request, reply) => {
    const username = request.payload.username.trim()
    request.yar.set('user', username)
    reply(`logged in as ${username}.`)
  },
})

server.route({
  path: '/user/logout',
  method: 'get',
  config: {
    tags: ['api'],
  },
  handler: (request, reply) => {
    request.yar.clear('user')
    reply(`logged out.`)
  },
})