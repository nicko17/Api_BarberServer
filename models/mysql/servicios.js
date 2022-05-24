const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Servicios = sequelize.define(
    "servicio",
    {
        idServicio: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true,
        },
        TipoServicio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Servicios