const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Cliente = sequelize.define(
    "clientes",
    {
        id: {
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
        }
    },
    {
        timestamps: false,
    }
)

module.exports = Cliente