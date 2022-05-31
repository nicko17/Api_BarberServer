const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getCitas, getCita, createCita, updateCita, deleteCita } = require("../controllers/citas")
const checkRol = require("../middleware/rol")
const authMiddleware = require("../middleware/session")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/citas", getCitas)

router.get("/citas/:id", authMiddleware, checkRol('usuario'), getCitas)

router.post("/citas/", createCita)

router.put("/citas/:id", updateCita) 

router.delete("/citas/:id", deleteCita) 

module.exports = router
