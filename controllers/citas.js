const {citasModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')


//Obtener lista de la base de datos
const getCita = async(req, res) => {
    try {
        let id =  req.params.id
        const data = await citasModel.findOne({
            where:{
                idCitas: id
            }
        })
        const user = req.user
        res.send({data, user})   
    } catch (error) {
        handleHttpError(res, 'Error obtener la cita')
    }
}

//Obtener un detalle de la base de datos
const getCitas = async (req, res) => {
    try {
        const data = await citasModel.findAll({})
        res.send({ data })
        console.log(data)
    } catch (error) {
        handleHttpError(res, 'Error obtener las citas')
    }
}

//Crear un registro
const createCita = async (req, res) => {
    try {
        const body = req.body
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await citasModel.create(body)
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al pedir cita')
    }
}

//Actualizar un registro
const updateCita = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await citasModel.update(req.body, {
            where:
            {
                idCitas: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al actualizar cita')
    }
}

//Eliminar un registro
const deleteCita = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await citasModel.destroy({
            where:{
                idCitas: id
            }
        })
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al eliminar cita')
    }
}


module.exports = { getCita, getCitas, createCita, updateCita, deleteCita }
