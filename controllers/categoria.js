const {categoriaModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL
const multer = require("multer")


//Obtener lista de la base de datos
const getCategoria = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await categoriaModel.findOne({
            where:{
                idCategoria: id
            }
        })
        const user = req.user
        res.send({data, user})   
    } catch (error) {
        handleHttpError(res, 'Error al obtener la categoria')
    }
}

//Obtener un detalle de la base de datos
const getCategorias = async (req, res) => {
    try {
        const data = await categoriaModel.findAll({})
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al obtener las categorias')
    }
}

//Crear un registro
const createCategoria = async (req, res) => {
    try {
        const body = req.body
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await serviciosModel.create(body)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al craer la categoria')
    }
}

//Actualizar un registro
const updateCategoria = async (req, res) => {
    try {
        const id = req.params.id
        // const fileData = {
        //     filename: file.filename,
        //     url:`${PUBLIC_URL}/${file.filename}`
        // }
        const data = await categoriaModel.update(req.body, {
            where:
            {
                idCategoria: id
            }
        })
        res.send({ data })
    } catch (error) {
        handleHttpError(res, 'Error al actualizar la categoria')
    }
}

//Eliminar un registro
const deleteCategoria = async (req, res) => {
    try {
        let id =  req.params.id
        const data = await categoriaModel.destroy({
            where:{
                idCategoria: id
            }
        })
        res.send({ data })   
    } catch (error) {
        handleHttpError(res, 'Error al eliminar la categoria')
    }
}


module.exports = { getCategorias, getCategoria, createCategoria, updateCategoria, deleteCategoria }
