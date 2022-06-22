'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import db from './model/index';

import UserRouter from './routes/UserRouter';

const app = express();
const { PORT } = process.env;
const port = PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

(async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    return new Error(error.message);
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
