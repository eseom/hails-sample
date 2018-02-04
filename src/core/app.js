import Promise from 'bluebird'
import redisOriginal from 'redis'

export default ({ server, config }) => {
  const redis = Promise.promisifyAll(redisOriginal)
  server.app.redis = redis.createClient({ url: config.redis })
  server.app.subscriber = redis.createClient({ url: config.redis })
}
