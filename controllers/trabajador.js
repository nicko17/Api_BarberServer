const {trabajadorModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")


//Obtener lista de la base de datos
const getItem = () => {

}

//Obtener un detalle de la base de datos
const getItems = async (req, res) => {
    const data = await trabajadorModel.findAll({})

    res.send({data})
}

//Crear un registro
const createItem = async (req, res) => {
    const { body } = req 
    console.log(body)
    // const fileData = {
    //     filename: file.filename,
    //     url:`${PUBLIC_URL}/${file.filename}`
    // }
    const data = await trabajadorModel.create(body)
    res.send({data})
}

//Actualizar un registro
const updateItem = () => {

}

//Eliminar un registro
const deleteItem = () => {

}


module.exports = { getItem, getItems, createItem, updateItem, deleteItem }
