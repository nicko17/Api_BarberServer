const {clienteModel} = require('../models')
const  { matchedData } = require("express-validator")
const { tokenSign, verifytoken } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { handleHttpError } = require("../utils/handleError")
const { use } = require("../routes/auth")
const bcryptjs = require("bcryptjs")

const registerCtrl = async (req, res) => {

    try {
        req = matchedData(req)
        console.log(req.Password)
        const Password = await encrypt(req.Password)
        const body = {...req, Password}
        const dataUser = await clienteModel.create(body)
        dataUser.set("Password", undefined, { strict: false }) //no mostramos la contraseña en la data
    
        const data = {
            token: await tokenSign(dataUser),
            user:dataUser
        }
     
        res.send({data})
    } catch (error) {
           handleHttpError(res, "Error registrar usuario")
    }
}

const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await clienteModel.findOne({ Email:req.Email }).select('Password')

        if(!user){
            handleHttpError(res, "El cliente no existe", 404)
            return
        }

        const hashPassword = user.get('Password')
        console.log('ok')
        const check = await bcryptjs.compare(req.Password, hashPassword)
        if(!check){
            handleHttpError(res, "Contaseña invalida", 401)
            return
        }

        const data = {
            token: tokenSign(user),
            user
        }

        res.send({data})

    } catch (error) {
           handleHttpError(res, "Error loguear cliente")
    }
}

module.exports = {registerCtrl, loginCtrl}