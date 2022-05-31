const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes, Model } = require("sequelize")
const { clienteModel } = require("..")

const Cliente = sequelize.define(
    "clientes",
    {
        idCliente: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Apellidos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Foto: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: true,
            select: false,
        },
        Rol:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    }
)


module.exports = Cliente