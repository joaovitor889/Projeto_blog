
const Sequelize = require("sequelize");
const connection = new Sequelize('projeto_blog','root','joaoreis4',{
    host:  'localhost',
    dialect:  'mysql'
});

module.exports = connection;