const express = require("express")
const router = express.Router()
const  { validatorRegisterItem, validatorLoginItem } = require("../validators/auth")
const { registerCtrl, loginCtrl } = require("../controllers/auth")

router.post("/register", validatorRegisterItem, registerCtrl)

router.post("/login", validatorLoginItem, loginCtrl)

module.exports = router