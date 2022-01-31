const {Sequelize, Op} = require('sequelize');
var db = require('../models');

const Users = db.users;

const addUser = async (res, resp)=>{
    // let data = await Users.build({name:'Test2', email:'test3@gmail.com', gender: 'male'});
    // await data.save();
    // let data = await Users.create({name:'demo', email:'demo@email.com'})

//--------------------------- create record in bulk
    // let data = await Users.bulkCreate([
    //     {name:'bhnau', email:'bhanu@gmail.com', gender:'male'},
    //     {name:'bhnau2', email:'bhanu2@gmail.com', gender:'male'},
    //     {name:'bhnau3', email:'bhanu3@gmail.com', gender:'male'},
    //     {name:'bhnau4', email:'bhanu4@gmail.com', gender:'male'},
    // ]);

//---------------------------- insert only select fields

    let data = Users.create({name:'bhnau', email:'bhanu@gmail.com', gender:'male'},{
        fields: ['email']
    })

//---------------------------- update record
    // data.name = 'bhanu'
    // data.save();

//---------------------------- reload
    // data.name='dummy'
    // data.reload()

    let response = {
        data: 'ok'
    }

    resp.status(200).json(response);
}

const findUser = async (res, resp)=>{
//-------------------------------- single selected
    // let data = await Users.findOne({});

//-------------------------------- multiple select 
    // let data = await Users.findAll({});

//-------------------------------- multiple slectec with limited fileds
   
    // let data = await Users.findAll({
    //     attributes:[
    //         'name',
    //         'email',
///////////// change name like (as)
    //         ['email', 'emailID'],
//////////// Count
    //      //   [Sequelize.fn('Count', Sequelize.col('email')), 'emailCount'],
/////////// CONCAT
    //         [Sequelize.fn('CONCAT', Sequelize.col('email'), ' ID'), 'emailCount'],
    //     ]
    // });

// ---------------------------- include -exclude

    // let data = await Users.findAll({
    //     attributes:{
    //         exclude:['createdAt', 'updatedAt'],
    //         include: [
    //             [Sequelize.fn('CONCAT', Sequelize.col('name'), ' Singh'), 'fullName'],
    //         ]
    //         }
    // })

//--------------------------- Condition

    // let data = await Users.findAll({
    //     where:{
    //         // id:3
    //         id:{
    //             [Op.gt]:3
    //         },
    //         email:{
    //             [Op.like]:'%@gmail.com'
    //         }
    //     },
    //     order:[
    //         ['name', 'DESC']
    //     ],
    //     group: ['email', 'name'],
    //     limit:2,
    //     offset:1
    // })

//--------------------------- count

let data = await Users.count({});

    let response ={
        data
    }

    resp.status(200).json(response)
}


const updateUser = async (res, resp)=>{
    let data = await Users.update({name:'final'}, {
        where:{
            id:2
        }
    });

     let response = {
        data: 'ok'
    }

    resp.status(200).json(response);

}

const deleteUser = async (res, resp)=>{
    let data = await Users.destroy({
        where:{
            id:2
        }
    })

    // truncate table

    // let data = await Users.destroy({
    //     truncate:true
    // })

    let response = {
        data: 'ok'
    }

    resp.status(200).json(response);
}

module.exports ={
    addUser,
    findUser,
    updateUser,
    deleteUser
}