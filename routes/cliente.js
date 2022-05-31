const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { validatorCreateItem, validatorGetItem } = require("../validators/cliente")
const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/cliente")
const { uploadMiddleware } = require("../utils/handleCliente")
const checkRol = require("../middleware/rol")
const router = express.Router()

// Ruta   GET, POST, DELETE, PUT

//Obtener los items
router.get("/cliente", getItems)

//Obtener un item
router.get("/cliente/:id", authMiddleware, checkRol(['usuario']), validatorGetItem, getItem)

//Crear un item
router.post("/cliente", validatorCreateItem, createItem) 

//Actualizar un item
router.put("/cliente/:id", authMiddleware, checkRol(['usuario']), updateItem)

//Eliminar un item
router.delete("/cliente/:id", validatorGetItem, deleteItem)

module.exports = router

