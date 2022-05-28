const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.token
        if(apiKey == 'leifer'){

        }else{
            res.status(403)
            res.send( {e:"apikey no es correcta"} )
        }

        next()
    } catch (e) {
        res.status(403)
        res.send( {error:"Error en el header"} )
    }
}

module.exports = customHeader