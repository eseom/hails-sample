# hails-sample
- hails: advanced web stack with hapijs, sequelize, kuejs
- es7 version

# features
- babel.io es7 support
- django module style
- eslint integrated
- hapi-swagger

# required
- node
- redis

# usage
```
git clone https://github.com/eseom/hails-sample <project name>
cd <project name>
yarn
yarn hails db:up
yarn dev
open http://localhost:3000
```

# files idiom
- api.js: restful apis
- view.js: endpoint for webbrowser with templates
- task.js: kuejs jobs queue with redis
- model.js: sequelize models

# default-options
```
module.exports = {
  version: undefined,
  port: 3000,
  modules: [],
  moduleFilenames: ['api', 'view', 'task'],
  modelFilenames: ['model'],
  useSequelize: true,
  redis: {
    url: 'redis://localhost:6379/0',
  },
  swagger: {
    info: {
      title: 'API Documentation',
    },
    grouping: 'tags',
  },
  yar: {
    storeBlank: false,
    maxCookieSize: 0, // use server side storage
    cache: {
      cache: 'session',
    },
    cookieOptions: {
      password: 'the-password-must-be-at-least-32-characters-long',
      isSecure: false,
    },
  }
}
```

- you can override this settings with /setting.js

# sample project's files structure
```
src
└── server
    ├── core
    │   ├── api.js
    │   ├── task.js
    │   ├── templates
    │   │   └── index.html
    │   └── view.js
    ├── index.js
    └── user
        ├── api.js
        ├── model.js
        ├── task.js
        ├── templates
        │   └── user.html
        └── view.js
```