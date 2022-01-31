const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize_code', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    logging: true,
    pool:{max:5, min:0, idle:10000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(err =>{
    console.log("Error "+err)
})


module.exports = sequelize;