
const Sequelize = require("sequelize");
const connection = new Sequelize('projeto_blog','root','joaoreis4',{
    host:  'localhost',
    dialect:  'mysql',
    timezone: "-03:00"
});

module.exports = connection;