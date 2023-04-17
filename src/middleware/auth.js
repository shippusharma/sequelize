'use strict';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  const authorizationHeader = req.headers.authorization || req.headers['x-access-token'];
  // if don't get any token then
  if (!authorizationHeader || authorizationHeader === undefined) {
    throw res.status(403).send('A Token is Required for Authentication');
  }

  // spliting by 1-blankspace
  const bearerToken = authorizationHeader.split(' ');
  if (!bearerToken[1]) throw res.send('Access Denied');
  try {
    const users = jwt.verify(bearerToken[1], process.env.TOKEN_KEY);
    req.user = users;
    return next();
  } catch (error) {
    throw res.status(401).send('Invalid Token');
  }
};
