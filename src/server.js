'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { Sequelize } from 'sequelize';

import UserRouter from './routes/UserRouter';

const app = express();
const { PORT, MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;
const port = PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

//! Database Connection
export const db = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});

(async () => {
  try {
    await db.authenticate();
    console.log(':>) Connection has been established successfully....!');
  } catch (error) {
    return console.error('Unable to connect to the database:', error.message);
  }

  app.listen(port, (err) => {
    if (err) throw new Error(error.message);
    console.log(`🚀 Express-Server ready at http://localhost:${port}`);
    console.log('Start Coding with Happiness  :)');
  });
})();

app.get('/', (req, res) => {
  res.send('Welcome to HelloWorld!');
});

app.use('/user', UserRouter);
