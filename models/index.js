const Users = require('./users');
const Posts = require('./posts');
const PostTags = require('./post_tag');
const Tags = require('./tags');
const Image = require('./image');
const Video = require('./video');
const Comment = require('./comment');
const Employees = require('./Employees');

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
});

Users.addScope('includePost',{
    include:{
        model:Posts,
        attributes:['title' , 'content']
    }
});

Users.addScope('selectUsers',{
    attributes:['name' , 'email']
});


Users.addScope('limitCheck',{
    limit:2
});


///////// one to one /////////
// Users.hasOne(Posts, {foreignKey: 'user_id', as:'PostDetail'}) // defualt userId (post kisne create ki hai)

////////// one to many ///////
// Users.hasMany(Posts, {foreignKey: 'user_id', as:'PostDetail'})
// Users.hasMany(Posts, {foreignKey: 'user_id'})
// no need to define foreignKey in here add. define (underscored:true) in posts models.
Users.hasMany(Posts, {as:'PostDetail'})
Posts.belongsTo(Users.scope('checkStatus'), {foreignKey: 'user_id', as:'UserInfo'}) // (post kis se belong kr rhi hai)

///////// Many to Many ////////
Posts.belongsToMany(Tags, {through: 'post_tags'});
Tags.belongsToMany(Posts, {through: 'post_tags'});

//// ------------------ Polymorphic One to Many ----------------- //////////

Image.hasMany(Comment, {
    foreignKey:'commnetableId',
    constraints:false,
    scope:{
        commnetableType:'image'
    }
})


Video.hasMany(Comment, {
    foreignKey:'commnetableId',
    constraints:false,
    scope:{
        commnetableType:'video'
    }
})

Comment.belongsTo(Image, {foreignKey: 'commnetableId', constraints:false});
Comment.belongsTo(Video, {foreignKey: 'commnetableId', constraints:false});


module.exports={
    Users,
    Posts,
    PostTags,
    Tags,
    Image,
    Video,
    Comment,
    Employees
};