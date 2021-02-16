const Sequelize = require('sequelize')
const { sequelize } = require('../database/connection')

const Update = sequelize.define('update', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    serviceName: Sequelize.DataTypes.STRING,
    vendorNumber : Sequelize.DataTypes.STRING,
    vendorName: Sequelize.DataTypes.STRING,
    contact: Sequelize.DataTypes.STRING,
    houseNumber: Sequelize.DataTypes.STRING,
    street: Sequelize.DataTypes.STRING,
    line2: Sequelize.DataTypes.STRING,
    line3: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    postalCode: Sequelize.DataTypes.STRING,
    country: Sequelize.DataTypes.STRING,
    region: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    currency: Sequelize.DataTypes.STRING,
    payment: Sequelize.DataTypes.STRING,
    supportingDocuments: Sequelize.DataTypes.STRING,
}, { timestamps: true })

module.exports = { Update }