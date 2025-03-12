const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        programa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        semestre: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contacto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        facultad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        social: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}