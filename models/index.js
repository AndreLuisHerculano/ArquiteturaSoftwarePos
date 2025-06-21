const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite',
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Cliente = require('./cliente.model')(sequelize, Sequelize);

module.exports = db;