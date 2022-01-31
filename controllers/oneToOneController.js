// const { Sequelize, QueryTypes } = require("sequelize");
// const sequelize = require("../utils/database");
const { Users, Posts, Tags, PostTags} = require("../models");

const OneToOne = async (res, resp) => {

    let data = await Users.findAll({
        attributes:['name', 'email'],
        include:[{
            model:Posts,
            as:'PostDetail',
            attributes:['title', ['name', 'PostName']]
        }],
        where: {id:1}
    });
    const response ={
        data
    }

    return resp.status(200).json(response);
}

const belongsTo = async (res, resp) => {

    let data = await Posts.findAll({
        attributes:['content', 'title'],
        include:[{
            model:Users,
            as:'UserInfo',
            attributes:['name', 'email']
        }],
        where: {id:1}
    });
    const response ={
        data
    }

    return resp.status(200).json(response);
}

const OneToMany = async (res, resp) => {

    let data = await Users.findAll({
        attributes:['name', 'email'],
        include:[{
            model:Posts,
            as:'PostDetail',
            attributes:['title', ['name', 'PostName']]
        }],
        where: {id:1}
    });
    const response ={
        data
    }

    return resp.status(200).json(response);
}

const manyToMany = async (res, resp) => {
    //----- Post to Tag ------------ //
    // const data = await Posts.findAll({
    //     attributes:['title', 'content'],
    //     include:[
    //         {model:Tags,
    //         attributes:['name']
    //         }
    //     ]
    // });

    const data = await Tags.findAll({
        attributes:['name'],
        include:[
            {
                model:Posts,
                attributes:['title']
            }
        ]
    })

    const response ={
        data
    }

    return resp.status(200).json(response);
}

module.exports = {
    OneToOne,
    belongsTo,
    OneToMany,
    manyToMany
}