const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Citas = sequelize.define(
    "citas",
    {
        idCitas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idTrabajador: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Hora: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        Fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Citas
