const sequelize = require("../utils/database");
const { Employees, Users, Posts, Tags, PostTags } = require("../models");

const Transations = async (req, resp) => {
  const t = await sequelize.transaction();

//////////////// insert data

//   try {
//     const user = await Users.create(
//       { name: "raja", email: "raja@gmail.com", gender: "male" },
//       {
//         transation: t,
//       }
//     );
//     console.log("commit");
//     t.commit();
//   } catch (error) {
//     console.log("rollback");
//     t.rollback();
//   }

let data = await Users.findAll({
    transaction: t,
    lock:true
})

  const response = {
    data
  };

  return resp.status(200).json(response);
};

module.exports = {
  Transations,
};
