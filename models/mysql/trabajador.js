const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

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
    },
    {
        timestamps: false,
    }
)

module.exports = Trabajador