const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getItems, getItem, createItem } = require("../controllers/trabajador")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/trabajador", getItems)

router.get("/trabajador:id", getItem)

router.post("/trabajador", uploadMiddleware.single("Foto"), createItem) 

module.exports = router
