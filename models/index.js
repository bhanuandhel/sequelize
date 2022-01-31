const Users = require('./users');
const Posts = require('./posts');
const PostTags = require('./post_tag');
const Tags = require('./tags');

//////// scopes /////////

Users.addScope('checkStatus',{
    where:{
        status:1
    }
})

Users.addScope('checkGender',{
    where:{
        gender:'male'
    }
})

///////// one to one /////////
// Users.hasOne(Posts, {foreignKey: 'user_id', as:'PostDetail'}) // defualt userId (post kisne create ki hai)

////////// one to many ///////
Users.hasMany(Posts, {foreignKey: 'user_id', as:'PostDetail'})
Posts.belongsTo(Users.scope('checkStatus'), {foreignKey: 'user_id', as:'UserInfo'}) // (post kis se belong kr rhi hai)

///////// Many to Many ////////
Posts.belongsToMany(Tags, {through: 'post_tags'});
Tags.belongsToMany(Posts, {through: 'post_tags'});

module.exports={
    Users,
    Posts,
    PostTags,
    Tags
};