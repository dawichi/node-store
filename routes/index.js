const productsRouter = require('./products')

const routerApi = (app) => {
	app.use('/products', productsRouter)
}

module.exports = routerApi