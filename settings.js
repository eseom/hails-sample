module.exports = {
  development: {
    port: 3000,
    modules: [
      'core',
      'user',
    ],
    viewEngine: {
      type: 'nunjucks',
    },
    redis: {
      url: 'redis://localhost:6379/10',
    },
    schedules: [
      ['*/10 * * * * *', 'user.test'],
    ],
    database: {
	  storage: 'test.database',
	  dialect: 'sqlite',
    },
    database_pgsql: {
      url: 'postgres://user@localhost/ranky',
      options: {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
          ssl: false,
        },
      },
    },
    test: {
      storage: ':memory:',
      dialect: 'sqlite',
    },
  },
}
