'use strict';
import 'dotenv/config';
import Sequelize from 'sequelize';
import { userModel, adminModel, bookModel } from '@/components';

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

    // sync all models
    await sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    return console.error('Unable to connect to the database:', error.message);
  }
}

// all models of MySQL
export const AdminModel = adminModel(sequelize, Sequelize);
export const UserModel = userModel(sequelize, Sequelize);
export const BookModel = bookModel(sequelize, Sequelize);

BookModel.belongsTo(UserModel, { foreignKey: 'userId', sourceKey: 'id' });
UserModel.hasMany(BookModel, { foreignKey: 'userId', sourceKey: 'id' }); // foreignKey--> refering 'userId' od user, sourceKey-> id of user
