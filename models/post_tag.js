const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const PostTags =  sequelize.define("post_tags", {
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    },{
        timestamps:false
    });

module.exports = PostTags;