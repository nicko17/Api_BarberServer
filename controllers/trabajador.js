const {trabajadorModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')



//Obtener lista de la base de datos
const getTrabajador = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await trabajadorModel.findOne({
            where:{
                idTrabajador: id
            }
        })
        const user = req.user
        res.send({data, user})   
    } catch (error) {
        handleHttpError(res, 'Error al traer el trabajdor')
    }
}

//Obtener un detalle de la base de datos
const getTrabajadores = async (req, res) => {
    try {
        const data = await trabajadorModel.findAll({})
        res.send({ data })
        console.log(data)
    } catch (error) {
        handleHttpError(res, 'Error al obtener trabajdores')
    }
}

//Crear un registro
const createTrabajador = async (req, res) => {
    try {
        const body = req.body
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await trabajadorModel.create(body)
        res.send({ data })
      
    } catch (error) {
        handleHttpError(res, 'Error al crear el trabajador')
    }
}

//Actualizar un registro
const updateTrabajador = async (req, res) => {
    try {
        const id = req.params.id
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await trabajadorModel.update(req.body, {
            where:
            {
                idTrabajador: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al actualizar el trabajador')
    }
}

//Eliminar un registro
const deleteTrabajador = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await trabajadorModel.destroy({
            where:{
                idTrabajador: id
            }
        })
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al eliminar el trabajador')
    }
}


module.exports = { getTrabajadores, getTrabajador, createTrabajador, updateTrabajador, deleteTrabajador }
