const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

 const Posts = sequelize.define("posts", {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER
});

module.exports = Posts;