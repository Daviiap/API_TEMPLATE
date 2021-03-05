/* eslint-disable no-undef */
const express = require('express')
const filesystem = require('fs')
const path = require('path')
const swaggerUi = require('swagger-ui-express')
const LogService = require('../../app/services/log.service')

const router = express.Router()
const specsPath = path.join(__dirname, './specs')
const apiSpecs = []

filesystem
	.readdirSync(specsPath)
	.filter(
		(file) => file.indexOf('.') !== 0
      // eslint-disable-next-line
      && file !== path.basename(__filename) &&
      file.slice(-3) === '.js',
	)
	.forEach((file) => {
		const module = require(path.join(specsPath, file))
		apiSpecs.push(module)
	})

apiSpecs.forEach((apiSpec) => {
	if (apiSpec.active) {
		const urlPath = apiSpec.conf.swaggerDefinition.basePath
		LogService.info(`Documentação v1 rodando em: /doc${urlPath}.`)
		router.use(urlPath, swaggerUi.serveFiles(apiSpec.spec, apiSpec.specRaw))
		router.get(urlPath, (_, res) => res.send(apiSpec.html))
	}
})

module.exports = router
