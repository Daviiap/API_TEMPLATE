/* eslint-disable no-undef */
// Libraries
const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Paths
const apiPath = path.join(__dirname, '../../../app/routes/doc/*.js')
const mySqlModelsPath = path.join(__dirname, '../../../app/models/doc/*.js')

/**
 * API version 1.0 conf
 * Define swagger configurations
 */
const conf = {
	swaggerDefinition: {
		swagger: '2.0',
		info: {
			title: 'Documentation v1',
			version: '1.0.0',
			description: 'Api starter version',
		},
		host: process.env.SWAGGER_URL || 'api.localhost:8080',
		basePath: '/',
	},
	options: {
		apis: [apiPath, mySqlModelsPath],
	},
}

const specRaw = { swaggerDefinition: conf.swaggerDefinition, ...conf.options }
const spec = swaggerJSDoc({
	swaggerDefinition: conf.swaggerDefinition,
	...conf.options,
})
const html = swaggerUi.generateHTML(conf.swaggerDefinition, conf.options)

/**
 * Activate or not, swagger documentation for this version
 */
const active = true

module.exports = {
	conf,
	specRaw,
	spec,
	html,
	active,
}
