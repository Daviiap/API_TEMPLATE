/* eslint-disable no-undef */
require('dotenv').config()

const environment = {
	development: {
		NODE_ENV: process.env.NODE_ENV || 'development',
		API: {
			host: process.env.API_URL || 'localhost',
			port: process.env.API_PORT || 3001
		},
		DB: {
			name: process.env.DB_NAME || 'my_db',
			user: process.env.DB_USERNAME || 'username',
			password: process.env.DB_PASSWORD || 'password'
		}
	},

	staging: {
		NODE_ENV: process.env.NODE_ENV || 'development',
		API: {
			host: process.env.API_URL,
			port: process.env.API_PORT
		},
		DB: {
			name: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD
		}
	},

	production: {
		NODE_ENV: process.env.NODE_ENV || 'development',
		API: {
			host: process.env.API_URL,
			port: process.env.API_PORT
		},
		DB: {
			name: process.env.DB_NAME,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD
		}
	}
}

module.exports = environment[process.env.NODE_ENV || 'development']
