const {Employees, Users, Posts, Tags, PostTags} = require("../models");

const paranoid = async (req, resp) =>{
///////////////////// get all data

    // const data = await Employees.findAll({});

////////////////// data with softdelete

    // const data = await Employees.findAll({
    //     paranoid:false
    // });

////////////////////// softdelete restore

     const data = await Employees.restore({
        where:{
            id:1
        }
    });

/////////////////////// softdelete data

    // const data = await Employees.destroy({
    //     where:{
    //         id:1
    //     }
    // })

    const response = {
        data
    }
    
    return resp.status(200).json(response);
}

module.exports ={
    paranoid
};