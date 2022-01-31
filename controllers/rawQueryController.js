const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = require("../utils/database");
var db = require("../models");

const Users = db.users;

const RawQury = async (res, resp) => {
  const userData = await sequelize.query("Select * from users where gender = $gender ", {
    type: QueryTypes.SELECT,
    // model: Users,
    // mapToModel: true
    // raw:true 
    // replacements:{gender:'male'} // where gender=:gender
    // replacements: ['male'] //  where gender =?
    // replacements: {gender:['male', 'female']}  // where gender IN(:gender)
    // replacements: {searchEmail: '%@gmail.com'}  //where email LIKE : searchEmail 
    bind:{gender: 'male'} // where gender = $gender
  });



  const response = {
    data: "ok",
    record: userData
  };

  return resp.status(200).json(response);
};

module.exports = {
  RawQury,
};
