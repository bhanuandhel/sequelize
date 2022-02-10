const sequelize = require("../utils/database");
const { Employees, Users, Posts, Tags, PostTags } = require("../models");

const Hooks = async (req, resp) => {
    const data = await Users.create({name:'bhanu', email:'bhanu12344@gmail.com', gender:'male'});
  const response = {
    data
  };

  return resp.status(200).json(response);
};

module.exports = {
  Hooks,
};