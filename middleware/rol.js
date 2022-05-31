const { contextsKey } = require("express-validator/src/base")
const models = require("../models")
const { handleHttpError } = require("../utils/handleError")

const checkRol = (rol) =>(req, res, next) => {
    try {
        const { user } = req
        console.log(user)
        const rolesByUser = user.Rol

        const checkValueRol = rol.some((rolSingle) => rolesByUser.includes(rolSingle))
        if(!checkValueRol){
            handleHttpError(res, "No tiene los permisos")
        }

        next()
    } catch (error) {
        handleHttpError(res, "Error con los permisos", 403)
    }
        
}


module.exports = checkRol