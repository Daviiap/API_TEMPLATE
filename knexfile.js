const env = require('./src/config/environment')

const database = {

  development: {
    client: 'pg',
    connection: {
      database: env.DB.name || 'my_db',
      user: env.DB.user || 'username',
      password: env.DB.password || 'password'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: `${__dirname}/src/database/seeds`
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: `${__dirname}/src/database/seeds`
    }
  }

}

module.exports = database[env.NODE_ENV || 'development']
