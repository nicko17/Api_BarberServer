const { verify } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const models = require("../models")
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
     const sign = await jwt.sign(
         {
            id: user.id,
            role: user.Rol,
         },
         JWT_SECRET,
         {
             expiresIn: "2h"
         }
     )
     
     return sign
}

const verifytoken = async (tokenJwt) => {
    try {
        console.log('entra')
        verify = jwt.verify(tokenJwt, JWT_SECRET)
        console.log(verify)
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        console.log('error')
        return null
    }
}

module.exports = { tokenSign, verifytoken }