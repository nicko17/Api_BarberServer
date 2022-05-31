const {clienteModel, trabajadorModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")
const { verifytoken } = require("../utils/handleJwt")  

const authMiddleware = async (req, res, next) => {
  try {
    
    if(!req.headers.authorization){
      handleHttpError(res, "No tiene un token", 401)
    }

    const token  = req.headers.authorization.split(' ').pop()
    const datatoken = await verifytoken(token)

    console.log(token)
    console.log("Rol -->", datatoken["role"])
    console.log("ID -->", datatoken)

    if(!datatoken){
      handleHttpError(res, "Token no existe", 401)
    }

    if(datatoken["role"] == "trabajador"){
      const query = {where: {
        idTrabajador:datatoken["id"]
      }
      }
      console.log(query)

      const user = await trabajadorModel.findOne(query)
      req.user = user
    }else if(datatoken["role"] == "usuario"){
      const query = {where: {
        idCliente:datatoken["id"]
      }
      }
      console.log(query)

      const user = await clienteModel.findOne(query)
      req.user = user
    }

    next()

  } catch (error) {
    handleHttpError(res, "Sesion invalida", 401)
  }
}

module.exports = authMiddleware 