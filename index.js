const express = require('express')
const routerApi = require('./routes')

const app = express()
const port = 3400

app.use(express.json())

routerApi(app)
const router = express.Router()

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

module.exports = router