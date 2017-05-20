import { server } from 'hails'

server.route({
  path: '/',
  method: 'get',
  config: {
    tags: ['api'],
  },
  handler: (request, reply) => {
    reply.view('index.html')
  },
})
