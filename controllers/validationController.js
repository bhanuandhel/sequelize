const {Sequelize} = require('sequelize');
var db = require('../models');

const Users = db.users;

const validations = async (res, resp)=>{
    try {
        let data = await Users.create({name:"bhanu", email:"bhanu@gmail.com", gender:"males"})

    } catch (e) {
        const messages ={}
        console.log(e)
        e.errors.forEach((error) => {
            let message;
            // console.log(error)
            switch (error.validatorKey) {
                case 'not_unique':
                message='Duplicate Email'
                break;
                case 'equals':
                 message= 'Validation equals on gender failed'
                break;
                 case 'isIn':
                 message= 'Gender Not in Male/ Female'
                break;
            }
            messages[error.path]=message;
        });
        console.log(messages)

    }

    const response = {
        data:'me'
    }
    return resp.status(200).json(response)
}

module.exports ={
  validations
}