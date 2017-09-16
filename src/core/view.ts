import { server, logger } from 'hails'

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => {
    (<any>reply).view('index')
  }
})