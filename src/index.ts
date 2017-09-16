import { server, logger } from 'hails'
import { spawn } from 'child_process'

const settings = require('../settings.js')

const options = settings[process.env.NODE_ENV || 'development']

server
  .init(options)
  .then((done: () => void) => {
    done()
    logger.info('server started.')
  })

let timer = null
const intervalJob = () => {
  const devices = spawn('sh', ['contrib/sample-script.sh'])
  devices.stdout.on('data', (data: ArrayBuffer) => {
    logger.debug(data.toString().trim())
  })
  devices.stderr.on('data', (data: ArrayBuffer) => {
    logger.error(data.toString().trim())
  })
}

intervalJob()
timer = setInterval(intervalJob, 10000)
