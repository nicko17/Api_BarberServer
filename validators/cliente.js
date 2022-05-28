const { check } = require("express-validator")
const { validateResults } = require("../utils/handleValidator")

const validatorCreateItem = [
    check("Nombres")
    .exists()
    .notEmpty(),
    check("Apellidos")
    .exists()
    .notEmpty(),
    check("Telefono")
    .exists()
    .notEmpty(),
    check("Email")
    .exists()
    .notEmpty(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) =>{
        return validateResults(req, res, next)
    }
]


module.exports = { validatorCreateItem, validatorGetItem }