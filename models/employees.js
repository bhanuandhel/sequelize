const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

 const Employees = sequelize.define("employee", {
    name: DataTypes.STRING,
    userId:DataTypes.STRING
    },{
    createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deletedAt',
      paranoid: true,
      timestamps: true,
    });

module.exports = Employees;