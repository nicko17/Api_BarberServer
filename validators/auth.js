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
    .isLength({min: 5, max: 10}),
    (req, res, next) =>{
        return validateResults(req, res, next)
    } 
]

const validatorLoginItem = [
<<<<<<< HEAD
=======
    check("Password")
    .exists()
    .notEmpty()
    .isLength({min:5, max: 10}),
>>>>>>> dbd8b69e14132f3b23b350b58e8629e20c179eb7
    check("Email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("Password")
    .exists()
    .notEmpty()
    .isLength({min: 5, max: 10}),
    (req, res, next) =>{
        return validateResults(req, res, next)
    } 
]


module.exports = { validatorRegisterItem, validatorLoginItem }