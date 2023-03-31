const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category =  require("../categories/Category");

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // Uma categoaria tem muitos artigos, indicado pelo metodo hasMany
Article.belongsTo(Category); // Um  artigo pertence a uma categoria, indicado pelo metodo belongsTo

module.exports = Article;
