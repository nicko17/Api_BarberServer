const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getServicios, getServicio, createServicio, updateServicio, deleteServicio } = require("../controllers/servicio")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/servicios", getServicios)

router.get("/servicios/:id", getServicio)

router.post("/servicios", createServicio) 

router.put("/servicios/:id", updateServicio) 

router.delete("/servicios/:id", deleteServicio) 

module.exports = router
