const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { validatorCreateItem, validatorGetItem } = require("../validators/cliente")
const customHeader = require("../middleware/customHeader")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/cliente")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta   GET, POST, DELETE, PUT

//Obtener los items
router.get("/cliente", getItems)

//Obtener un item
router.get("/cliente/:id", validatorGetItem, getItem)

//Crear un item
router.post("/cliente", validatorCreateItem, uploadMiddleware.single("Foto"), createItem) 

//Actualizar un item
router.put("/cliente/:id", updateItem)

//Eliminar un item
router.delete("/cliente/:id", validatorGetItem, deleteItem)

module.exports = router

