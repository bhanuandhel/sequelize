const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const Tags =  sequelize.define("tags", {
    name: DataTypes.STRING
    });

module.exports = Tags;