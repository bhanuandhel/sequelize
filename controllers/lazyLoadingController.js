const { Users, Posts} = require("../models");

const LazyLoading = async (req, resp)=>{
    const users = await Users.findOne({where:{id:1}});
    let postData = await users.getPosts();

    const response = {
        users,
        postData
    }
    return resp.status(200).json(response);
}

const EagerLoading = async (req, resp)=>{
    const users = await Users.findOne({
        include:[{
            required:true,  // use for change defualt JOIN LEFT JOIN to INNER JOIN
            model:Posts
        }],
        where:{id:1}
        });
    
    const response = {
        users
    }
    return resp.status(200).json(response);
}

module.exports = {
    LazyLoading,
    EagerLoading
}