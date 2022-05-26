const  handleHttpError = (res, message = 'algo sucedio', code = 403) => {
    return res.status(code).json({ error: message })
}

module.exports = { handleHttpError }