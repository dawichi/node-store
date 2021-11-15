const logErrors = (error, req, res, next) => {
	console.log(error)
	next(error)
}


// Don't delete 'next' param even if you don't use it as node
// detects which is a error middleware with that 4 params
const errorHandler = (error, req, res, next) => {
	res.status(500).json({
		message: error.message,
		stack: error.stack
	})
}

module.exports = { logErrors, errorHandler }