const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")
const { categoria } = require("./categoria")

const Trabajador = sequelize.define(
    "trabajadore",
    {
        idTrabajador: {
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
        Nom_local: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Foto: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        idCategoria: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: true,
            select: false,
        },
        Rol: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: false,
    }
)

// Trabajador.hasOne()

module.exports = Trabajador