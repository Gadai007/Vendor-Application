const Sequelize = require('sequelize')
const {sequelize } = require('../database/connection')

const Career = sequelize.define('career', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    vendorGroup: Sequelize.DataTypes.STRING,
    vendorName: Sequelize.DataTypes.STRING,
    standardAccessCenterCode: Sequelize.DataTypes.STRING,
    bptype: Sequelize.DataTypes.STRING,
    standardIndustryCode: Sequelize.DataTypes.STRING,
    Grouping: Sequelize.DataTypes.STRING,
    vendorContactTelephoneNumber: Sequelize.DataTypes.INTEGER,
    companyCode: Sequelize.DataTypes.STRING,
    searchTerm: Sequelize.DataTypes.STRING,
    incoterms: Sequelize.DataTypes.STRING,
    incotermsLocation: Sequelize.DataTypes.STRING,
    defaultPaymentTerms: Sequelize.DataTypes.STRING,
    orderCurrency: Sequelize.DataTypes.STRING,
    houseNumber: Sequelize.DataTypes.STRING,
    street: Sequelize.DataTypes.STRING,
    line2: Sequelize.DataTypes.STRING,
    line3: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    postalCode: Sequelize.DataTypes.STRING,
    country: Sequelize.DataTypes.STRING,
    region: Sequelize.DataTypes.STRING,
}, {timestamps: true})

module.exports = { Career }