const express = require("express")
const { matchedData } = require("express-validator")
const router = express.Router()
const  { validatorRegisterItem, validatorLoginItem } = require("../validators/auth")

router.post("/register", validatorRegisterItem, (req, res) => {

    req = matchedData(req)
    res.send({data:req})
})

module.exports = router