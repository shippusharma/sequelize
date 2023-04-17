'use strict';
import 'dotenv/config';
import Sequelize from 'sequelize';
import { userModel, adminModel } from '@/components';

const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST } = process.env;

// Database Connection
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

export async function MySQL_Database() {
  try {
    await sequelize.authenticate();
    console.log(':>) Connection has been established successfully....!');
    // all models
    userModel(sequelize, Sequelize);
    adminModel(sequelize, Sequelize);
    // sync all models
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    return console.error('Unable to connect to the database:', error.message);
  }
}

export async function MongoDB_Database() {
  try {
    // for mongodb
  } catch (error) {
    return console.error('Unable to connect to the database:', error.message);
  }
}
