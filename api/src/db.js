const {Sequelize} = require("sequelize");
require("dotenv").config();

const UsersModel = require("./models/UsersModel");
const PostsModel = require("./models/PostsModel");

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {logging: false}
);

// DEFINICION DE MODELOS A USAR
UsersModel(sequelize);
PostsModel(sequelize);

//Crear las relaciones // asociaciones

const {User, Post} = sequelize.models;

// Un usuario puede tener muchos posts
User.hasMany(Post);

//Un post pertence a un solo usuario
Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
