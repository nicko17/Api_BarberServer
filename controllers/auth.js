const {clienteModel} = require('../models')
const  { matchedData } = require("express-validator")
const { tokenSign, verifytoken } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { handleHttpError } = require("../utils/handleError")
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
    const {Email, Password} = req.body
    try {
        //req = matchedData(req);
        const user = await clienteModel.findOne({where :{
            Email 
        }})

        if(!user){
            return handleHttpError(res, "El cliente no existe", 404)
        }
        console.log("->",Password);
        
        const hashPasswordDb = user.get('Password')
        console.log({hashPasswordDb})
        const check = await compare(Password, hashPasswordDb)
        console.log('-> ',check);
        if(!check){
             return handleHttpError(res, "Contaseña invalida", 401)
            //return res.status(401).json({msg:'Credenciale incorrectas'});
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