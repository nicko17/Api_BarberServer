const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getCategorias, getCategoria, createCategoria, updateCategoria, deleteCategoria} = require("../controllers/categoria")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/categoria", getCategorias)

router.get("/categoria/:id", getCategoria)

router.post("/categoria", createCategoria)

router.put("/categoria/:id", updateCategoria) 

router.delete("/categoria/:id", deleteCategoria) 

module.exports = router
