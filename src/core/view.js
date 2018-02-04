export default () => [{
  path: '/hello',
  method: 'get',
  handler(request, h) {
    const packageJson = require('../../package.json')
    return h.view('core/index', {
      version: packageJson.dependencies.hails,
      message: 'message from view',
    })
  },
}]
