'use strict';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { MySQL_Database } from '@/model';
import { router } from '@/routes';

const app = express();
const { PORT } = process.env;
const port = PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/', (req, res) => {
  res.send('Welcome to HelloWorld!!');
});

(async () => {
  await MySQL_Database(); // database connection

  app.use('/api', router); // all api routes

  app.listen(port, (error) => {
    if (error) return new Error(error.message);
    console.log(`🚀 Express-Server ready at http://localhost:${port}`);
    console.log('Start Coding with Happiness  :)');
  });
})();
