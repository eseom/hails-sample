const redisDSN = 'redis://:dev@localhost:6379/0'

module.exports = {
  development: {
    // see https://github.com/eseom/hails#default-options
    // possible to override anything
    modules: [
      'core',
    ],
    connection: {
      port: 3000,
    },
    useSequelize: true,
    database: {
      dialect: 'sqlite',
      storage: 'database.sql',
    },
    scheduler: {
      enable: true,
      broker: {
        redis: redisDSN,
      },
      schedules: [['*/5 * * * * *', '/periodic-job']]
    },
  },
}
