const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getItems, getItem, createItem } = require("../controllers/categoria")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/categoria", getItems)

router.get("/categoria:id", getItem)

router.post("/categoria", uploadMiddleware.single("Foto"), createItem) 

module.exports = router
