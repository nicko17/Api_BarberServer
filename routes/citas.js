const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getItems, getItem, createItem } = require("../controllers/citas")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/citas", getItems)

router.get("/citas:id", getItem)

router.post("/citas", uploadMiddleware.single("Foto"), createItem) 

module.exports = router
