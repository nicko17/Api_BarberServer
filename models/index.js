const models = {
    clienteModel: require('./mysql/cliente'),
    trabajadorModel: require('./mysql/trabajador'),
    citasModel: require('./mysql/citas'),
    serviciosModel: require('./mysql/servicios'),
    categoriaModel: require('./mysql/categoria')
}

module.exports = models