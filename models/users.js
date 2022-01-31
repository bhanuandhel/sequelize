const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')
   
const Users = sequelize.define("users", {
        name:{
            type: DataTypes.STRING,
            // set(value){
            //     this.setDataValue('name', value+' Data')
            // },
            // get(){
            //     return this.getDataValue('name')+' XYZ '+this.email;
            // }
        },
        email:{
            type: DataTypes.STRING,
            // defaultValue:'test@gmail.com'
            allowNull: false,
            unique:true
        },
        gender:{
            type: DataTypes.STRING,
                validate:{
                    // equals:{
                    //     args:'male',
                    //     msg:'Please enter Only male'
                    // }
                    isIn:{
                        args:['male', 'female'],
                        msg: 'please select only male or female'
                    }
                    // isIn:['male', 'female']
                }
            },
        status:{
            type: DataTypes.BOOLEAN,
            }
        },{
        // timestamps:false,
        // updatedAt:false,
        // createdAt:false,
        // createdAt: 'create_at',
        // updatedAt: 'update_at',
        // engine: 'MYISAM',
        // tableName:'userdata'

    }
    );

module.exports = Users