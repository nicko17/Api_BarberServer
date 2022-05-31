const {serviciosModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')


//Obtener lista de la base de datos
const getServicio = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await serviciosModel.findOne({
            where:{
                idServicio: id
            }
        })
        const user = req.user
        res.send({data, user})   
    } catch (error) {
        handleHttpError(res, 'Error al obtener el servicio')
    }
}

//Obtener un detalle de la base de datos
const getServicios = async (req, res) => {
    try {
        const data = await serviciosModel.findAll({})
        res.send({ data })
        console.log(data)
    } catch (error) {
        handleHttpError(res, 'Error al obtener los servicios')
    }
}

//Crear un registro
const createServicio = async (req, res) => {
    try {
        const body = req.body
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await serviciosModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al crear el servicio')
    }
}

//Actualizar un registro
const updateServicio = async (req, res) => {
    try {
        const id = req.params.id
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await serviciosModel.update(req.body, {
            where:
            {
                idServicio: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al actualizar el cliente')
    }
}

//Eliminar un registro
const deleteServicio = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await serviciosModel.destroy({
            where:{
                idServicio: id
            }
        })
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al eliminar el servicio')
    }
}


module.exports = { getServicios, getServicio, createServicio, updateServicio, deleteServicio }
