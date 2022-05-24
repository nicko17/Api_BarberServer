const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getItems, getItem, createItem } = require("../controllers/servicio")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/servicios", getItems)

router.get("/servicios:id", getItem)

router.post("/servicios", uploadMiddleware.single("Foto"), createItem) 

module.exports = router
