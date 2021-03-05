const dbConfigs = require('../config/database')
const db = require('knex')(dbConfigs)

module.exports = db
