const { verify } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const models = require("../models")
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
    console.log("USER -->", user)
    const sing = {}
    if(user["Rol"] == "usuario"){
            sign = await jwt.sign(
            {
               id: user.idCliente,
               role: user.Rol,
            },
            JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
    }else if(user["Rol"] == "trabajador"){
        sign = await jwt.sign(
            {
               id: user.idTrabajador,
               role: user.Rol,
            },
            JWT_SECRET,
            {
                expiresIn: "2h"
            }
        )
    }
     
     return sign
}

const verifytoken = async (tokenJwt) => {
    try {
        console.log('entra')
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        console.log('error')
        return null
    }
}

module.exports = { tokenSign, verifytoken }