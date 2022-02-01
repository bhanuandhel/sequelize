const { Image, Video, Comment } = require("../models");

const oneToManyPolymorphic =  async (req, resp)=>{
///----------- image to commet ----------- ///
    // const data = await Image.findAll({
    //     include:[
    //         {
    //             model:Comment
    //         }
    //     ]
    // })

///----------- video to commet ----------- ///

    // const data = await Video.findAll({
    //     include:[
    //         {
    //             model:Comment
    //         }
    //     ]
    // })

/// ------------- Comment to video ------------ ///

const data = await Comment.findAll({
    include:[Image]
})

    const response = {
        data
    }

    return resp.status(200).json(response)
}

module.exports ={
    oneToManyPolymorphic
}