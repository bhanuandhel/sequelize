const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const Image =  sequelize.define("image", {
    title: DataTypes.STRING,
    url: DataTypes.STRING
    });

module.exports = Image;