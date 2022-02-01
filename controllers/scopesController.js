const { Users, Posts, Tags, PostTags } = require("../models");

const scopes = async (res, resp) => {
  // const data = await Users.scope(["checkStatus", "checkGender"]).findAll({});
  // const data = await Posts.findAll({
  //       include:{
  //         model:Users, as : 'UserInfo'
  //       }
  // })

   const data = await Users.scope(['includePost', 'selectUsers', 'limitCheck']).findAll({});
  const response = {
    data,
  };
  return resp.status(200).json(response);
};

module.exports = {
  scopes,
};
