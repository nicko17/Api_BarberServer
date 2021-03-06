const {clienteModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')


//Obtener lista de la base de datos
const getItem = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await clienteModel.findOne({
            where:{
                idCliente: id
            }
        })
        const user = req.user
        res.send({data, user})   
    } catch (error) {
        handleHttpError(res, 'Error al obtener el cliente')
    }
} 

//Obtener un detalle de la base de datos
const getItems = async (req, res) => {
    console.log(req.body.id)
    try {
        const data = await clienteModel.findAll({})
        res.send({ data })
        console.log(data)
    } catch (error) {
        handleHttpError(res, 'Error al obtener los clientes')
    }
}

//Crear un registro
const createItem = async (req, res) => {
    try {
        const body = req.body
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await clienteModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al crear el cliente')
    }
}

//Actualizar un registro
const updateItem = async (req, res) => {
    try {
        const id = req.params.id
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await clienteModel.update(req.body, {
            where:
            {
                idCliente: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al actualizar el cliente')
    }
}

//Eliminar un registro
const deleteItem = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await clienteModel.destroy({
            where:{
                idCliente: id
            }
        })
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al eliminar el cliente')
    }
}


module.exports = { getItem, getItems, createItem, updateItem, deleteItem }
