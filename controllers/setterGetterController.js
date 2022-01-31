const {Sequelize} = require('sequelize');
var db = require('../models');

const Users = db.users;

const setterGetter = async (res, resp)=>{
    let data = Users.create({name:'bhanu', email:'bhanugoh@gmail.com', gender:'male'})
    // let data = await Users.findAll({})
    let response = {
       data
    }

    return resp.status(200).json(response);

}

module.exports = {
    setterGetter
}