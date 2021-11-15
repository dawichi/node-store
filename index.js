const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')


// 0. Init server - initial conf
const port = 3400
const app = express()
app.use(express.json())


// 1. Routes
routerApi(app)


// 2. Middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)


// 3. Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})