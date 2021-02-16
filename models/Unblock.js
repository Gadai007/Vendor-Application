const Sequelize = require('sequelize')
const { sequelize } = require('../database/connection')

const Unblock = sequelize.define('unblock', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendorNumber : Sequelize.DataTypes.STRING,
    vendorName: Sequelize.DataTypes.STRING,
    reason: Sequelize.DataTypes.STRING,
    houseNumber: Sequelize.DataTypes.STRING,
    street: Sequelize.DataTypes.STRING,
    line2: Sequelize.DataTypes.STRING,
    line3: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    postalCode: Sequelize.DataTypes.STRING,
    country: Sequelize.DataTypes.STRING,
    region: Sequelize.DataTypes.STRING,
    supportingDocuments: Sequelize.DataTypes.STRING,
}, { timestamps: true})

module.exports = { Unblock }