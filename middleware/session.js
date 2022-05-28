const {clienteModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { verifytoken } = require("../utils/handleJwt")  

const authMiddleware = async (req, res, next) => {
  try {
    
    if(!req.headers.authorization){
      handleHttpError(res, "No tiene un token", 401)
    }

    const token  = req.headers.authorization.split(' ').pop()
    console.log(token)
    const datatoken = await verifytoken(token)

    console.log(datatoken['id'])
    console.log(req.params.id)

    if(!datatoken){
      handleHttpError(res, "Token no existe", 401)
    }

    const query = {where: {
      id:datatoken['id']
    }
    }

    console.log(query)
    const user = await clienteModel.findOne({query})
    console.log(user)

    req.user = user

    next()

  } catch (error) {
    handleHttpError(res, "Sesion invalida", 401)
  }
}

module.exports = authMiddleware 