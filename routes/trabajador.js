const { Router } = require("express")
const express = require("express")
const req = require("express/lib/request")
const { getTrabajadores, getTrabajador, createTrabajador, updateTrabajador, deleteTrabajador } = require("../controllers/trabajador")
const { uploadMiddleware } = require("../utils/handleCliente")
const router = express.Router()
const checkRol = require("../middleware/rol")
const authMiddleware = require("../middleware/session")

// Ruta http://localhost/cliente GET, POST, DELETE, PUT

router.get("/trabajador", getTrabajadores)

router.get("/trabajador/:id", authMiddleware, checkRol(['trabajador']), getTrabajador)

router.post("/trabajador", createTrabajador)

router.put("/trabajador/:id", updateTrabajador)

router.delete("/trabajador/:id", deleteTrabajador)

module.exports = router
