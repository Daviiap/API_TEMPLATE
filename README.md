# `Api REST TEMPLATE`
- #### Template para API rest.
    Template vazio para projeto utilizando `node`, `express` e `knex`.
    O intuito desse template é agilizar o processo de criação de uma API utilizando NodeJS, poupando o tempo de certas
    configurações iniciais

## Package.json
```json
{
  "name": "api",
  "version": "1.0.0",
  "description": "API REST TEMPLATE",
  "main": "/src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  "author": "SapienS",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.4.0",
    "knex": "^0.95.1",
    "morgan": "^1.9.1",
    "pg": "^8.5.1",
    "swagger-jsdoc": "^4.2.0",
    "swagger-ui-express": "^4.1.4"
  },
  "devDependencies": {
    "eslint": "^7.21.0",
    "eslint-config-standard": "^16.0.2",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.3.1",
    "nodemon": "^2.0.2"
  }
}

```
