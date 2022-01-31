const {Sequelize} = require('sequelize');
var db = require('../models');

const Users = db.users;

    const finderOpration  = async (res, resp)=>{
//---------------- return all record
        // let data = await Users.findAll({});
//---------------- return single record
        // let data = await Users.findOne({});
//---------------- return data by id
        // let data = await Users.findByPk(3);

//--------------- return find record in table if record not find then insert if record find then new record not insert
        let [data, created] = await Users.findOrCreate({
            where:{name: 'dummy1'},
            defaults:{
                email:'dummy1@gmail.com',
                gender:'male'
            }
        })

        let response = {
            data,
            add:created
        }
    resp.status(200).json(response)
}

module.exports ={
  finderOpration
}