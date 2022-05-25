const {clienteModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")
const { handleHttpError } = require('../utils/handleError')
const { matchedData } = require('express-validator')


//Obtener lista de la base de datos
const getItem = async (req, res) => {
    console.log("Entro")
    let id =  req.params.id
    const data = await clienteModel.findOne({
        where:{
            id: id
        }
    })
    res.send({data})
} 

//Obtener un detalle de la base de datos
const getItems = async (req, res) => {
    console.log(req.body.id)
    try {
        const data = await clienteModel.findAll({})
        res.send({data})
        console.log(data)
    } catch (error) {
        handleHttpError(res, 'Error get items')
    }
}

//Crear un registro
const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await clienteModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'Error create items')
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
                id: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error create items')
    }
}

//Eliminar un registro
const deleteItem = async (req, res) => {

}


module.exports = { getItem, getItems, createItem, updateItem, deleteItem }
