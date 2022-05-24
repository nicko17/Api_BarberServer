const { Sequelize, sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Categoria = sequelize.define(
    "categoria",
    {
        idCategoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre_cat: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Categoria