const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const Comment =  sequelize.define("comment", {
    title: DataTypes.STRING,
    commnetableId: DataTypes.INTEGER,
    commnetableType: DataTypes.STRING
});

module.exports = Comment;