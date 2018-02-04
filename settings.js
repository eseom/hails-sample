const redisDSN = 'redis://:dev@localhost:19011/0'

module.exports = {
  development: {
    context: './src',
    modules: [
      'core',
    ],
    useSequelize: true,
    database: {
      storage: './sample.database',
      dialect: 'sqlite',
      migrationStorageTableName: 'sequelize_meta',
    },
    redis: redisDSN,
    scheduler: {
      enable: true,
      broker: {
        redis: redisDSN,
      },
      schedules: [
        ['*/5 * * * * *', '/core/periodic-job'],
      ],
    },
  },
}
