'use strict';
import 'dotenv/config';
import Sequelize from 'sequelize';
import UserModel from '../components/user/UserModel';

const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

//! Database Connection
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log(':>) Connection has been established successfully....!');
  } catch (error) {
    return console.error('Unable to connect to the database:', error.message);
  }
})();

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = UserModel(sequelize, Sequelize);

export default db;
