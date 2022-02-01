const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const Video =  sequelize.define("video", {
    title: DataTypes.STRING,
    text: DataTypes.STRING
    });

module.exports = Video;