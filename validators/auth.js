const { check } = require("express-validator")
const { validateResults } = require("../utils/handleValidator")

const validatorRegisterItem = [
    check("Nombres")
    .exists()
    .notEmpty()
    .isLength({max: 50}),
    check("Apellidos")
    .exists()
    .notEmpty()
    .isLength({max: 50}),
    check("Telefono")
    .exists()
    .notEmpty()
    .isLength({max: 30}),
    check("Email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("Password")
    .exists()
    .notEmpty()
    .isLength({min: 10, max: 10}),
    (req, res, next) =>{
        return validateResults(req, res, next)
    } 
]

const validatorLoginItem = [
    check("Password")
    .exists()
    .notEmpty()
    .isLength({min: 10, max: 10}),
    check("Email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    } 
]


module.exports = { validatorRegisterItem, validatorLoginItem }