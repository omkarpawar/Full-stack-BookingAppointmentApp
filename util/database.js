const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment','root','omkar',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports=sequelize;