const express = require('express')
const router = express.Router()

// Test route
router.get('/', (req, res) => {
	res.status(200)
	res.json({
		apiVersion: 'v1.0',
		status: 'running',
		randomInt: Number(String(Date.now())[12]),
		now: new Date().toLocaleString()
	})
})

module.exports = router
