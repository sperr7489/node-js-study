"use strict";
const Sequelize = require("sequelize");

//모델과 index.js를 연결하는 부분.
const User = require("./user");
const Comment = require("./comment");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; //sequelize라는 새로운 property를 설정한다고 할 수 있다.

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

const user = await User.findOne({});
console.log(user);




module.exports = db;
