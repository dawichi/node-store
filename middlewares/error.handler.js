const logErrors = (error, req, res, next) => {
	console.log('----- logErrors -----')
	console.log(error)
	next(error)
}


// Don't delete 'next' param even if you don't use it as node
// detects which is a error middleware with that 4 params
const errorHandler = (error, req, res, next) => {
	console.log('----- errorHandler -----')
	res.status(500).json({
		message: error.message,
		stack: error.stack
	})
}


const boomErrorHandler = (error, req, res, next) => {
	console.log('----- boomErrorHandler -----')
	if (error.isBoom) {
		const { output } = error
		res.status(output.statusCode).json(output.payload)
	} else {
		next(error)
	}
}


module.exports = { logErrors, errorHandler, boomErrorHandler }