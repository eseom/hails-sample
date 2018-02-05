# hails-sample
- hails: advanced web stack with hapijs, sequelize, kuejs

# features
- es7 (include import without any configurations)
- django module style
- eslint
- hapi-swagger

# required
- node >= 8.9.0
- redis

# usage
```
git clone https://github.com/eseom/hails-sample <project name>
cd <project name>
docker-compose up -d
yarn
yarn hails db:up
yarn dev
open http://localhost:3000

# db migration
yarn hails db:create -- --name <new migration name>
yarn hails db:up
yarn hails db:down
```

# files idiom
- app.js: tools for the module (eg. redis client)
- api.js: restful apis
- view.js: endpoint for webbrowser with templates
- task.js: kuejs jobs queue with redis
- model.js: sequelize models

# default-options
```
export default {
  context: undefined,
  vesion: undefined,
  connection: {
    host: '0.0.0.0',
    port: 3000,
  },
  logger: {
    level: 'silly',
  },
  modules: [],
  moduleFilenames: ['api', 'app', 'method', 'view', 'task'],
  modelFilenames: ['model'],
  useSequelize: false,
  viewEngine: {
    type: 'nunjucks',
  },
  scheduler: {
    enable: false,
  },
  swagger: {
    info: {
      title: 'API Documentation',
    },
    grouping: 'tags',
  },
  yar: {
    engine: {
      type: 'memory',
    },
    cookieOptions: {
      password: 'the-password-must-be-at-least-32-characters-long',
      isSecure: false,
    },
  },
}
```

- you can override this settings with /settings.js

# sample project's files structure
```
src
  ├── core
  │   ├── app.js
  │   ├── api.js
  │   ├── task.js
  │   ├── model.js
  │   ├── templates
  │   │   ├── base.html
  │   │   └── index.html
  │   └── view.js
```