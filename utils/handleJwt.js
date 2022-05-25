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
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSign, verifytoken }