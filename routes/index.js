const express = require('express')
const productsRouter = require('./products')
// const usersRouter = require('./users')

const routerApi = (app) => {
	const router = express.Router()
	app.use('/api/v1', router)

	router.use('/products', productsRouter)
	// router.use('/users', usersRouter)
	// router.use('/categories', categoriesRouter)
}

module.exports = routerApi