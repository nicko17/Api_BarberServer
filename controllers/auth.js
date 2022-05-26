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
<<<<<<< HEAD
    try {
        req = matchedData(req)
        const user = await clienteModel.findOne({ Email:req.Email }).select('Password')
=======

    console.log(req.body);

    const { Email, Password } = req.body;

    try {
        //req = matchedData(req);
        const user = await clienteModel.findOne({where :{
            Email 
        }})

         
        console.log('-> ',user);
>>>>>>> dbd8b69e14132f3b23b350b58e8629e20c179eb7

        if(!user){
            handleHttpError(res, "El cliente no existe", 404)
            console.log("ok")
            return ''
        }

<<<<<<< HEAD
        const hashPassword = user.get('Password')
        console.log('ok')
        const check = await bcryptjs.compare(req.Password, hashPassword)
=======
        
        const hashPasswordDb = user.get('Password')
        console.log({hashPasswordDb})
        const check = await compare(Password, hashPasswordDb)
        console.log('-> ',check);
>>>>>>> dbd8b69e14132f3b23b350b58e8629e20c179eb7
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
            return res.status(500).json({
                msg : 'error'
            });
    }
}

module.exports = {registerCtrl, loginCtrl}