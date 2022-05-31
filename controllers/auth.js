const {clienteModel, trabajadorModel} = require('../models')
const  { matchedData } = require("express-validator")
const { tokenSign, verifytoken } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { handleHttpError } = require("../utils/handleError")
const bcryptjs = require("bcryptjs")


const registerCtrl = async (req, res) => {

    try {
        req = req
        if(req.body.Rol == "usuario"){
            const Password = await encrypt(req.body.Password)
            const body = {...req.body, Password}
            const dataUser = await clienteModel.create(body)
            dataUser.set("Password", undefined, { strict: false }) //no mostramos la contraseña en la data

            const data = {
                token: await tokenSign(dataUser),
                user:dataUser
            }
        
            res.send({data})
        }else if(req.body.Rol == "trabajador"){
            const Password = await encrypt(req.body.Password)
            const body = {...req.body, Password}
            const dataUser = await trabajadorModel.create(body)
            dataUser.set("Password", undefined, { strict: false }) //no mostramos la contraseña en la data
        
            const data = {
                token: await tokenSign(dataUser),
                user:dataUser
            }
         
            res.send({data})
        }
    } catch (error) {
           handleHttpError(res, "Error registrar usuario")
    }
}

const loginCtrl = async (req, res) => {
    const {Email, Password} = req.body
    try {
        req = matchedData(req);
        const userCliente = await clienteModel.findOne({where :{
            Email 
        }})

        if(!userCliente){
            const userTrabajador = await trabajadorModel.findOne({where :{
                Email 
            }})

            if(!userTrabajador){
                return handleHttpError(res, "El usuario no existe", 404)
            }

            const hashPasswordDb = userTrabajador.get('Password')
            const check = await compare(Password, hashPasswordDb)
            if(!check){
                 return handleHttpError(res, "Contaseña invalida", 401)
            }
    
            userTrabajador.set("Password", undefined, {strict:false})
            const data = {
                token: await tokenSign(userTrabajador),
                userTrabajador
            }
            console.log("AQUI DATA -->", data)
    
            res.send({data})
        }else{
            const hashPasswordDb = userCliente.get('Password')
            const check = await compare(Password, hashPasswordDb)
            if(!check){
                 return handleHttpError(res, "Contaseña invalida", 401)
            }
    
            userCliente.set("Password", undefined, {strict:false})
            const data = {
                token: await tokenSign(userCliente),
                userCliente
            }
    
            console.log("AQUI DATA -->", data)
    
            res.send({data})
        }

    } catch (error) {
           handleHttpError(res, "Error loguear cliente")
    }
}

module.exports = {registerCtrl, loginCtrl}