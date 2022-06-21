'use strict';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const Auth = (req, res, next) => {
  //! Headers
  const authorizationHeader = req.headers['x-access-token'] || req.headers.authorization;
  //! if don't get any token then
  if (!authorizationHeader || authorizationHeader === undefined) {
    throw res.status(403).send('A Token is Required for Authentication');
  }

  //! spliting by 1-blankspace
  const bearerToken = authorizationHeader.split(' ');
  if (!bearerToken[1]) throw res.send('Access Denied');
  try {
    //! Verify by token key
    const users = jwt.verify(bearerToken[1], process.env.TOKEN_KEY);
    req.user = users;

    //! calling next Route
    return next();
  } catch (error) {
    throw res.status(401).send('Invalid Token');
  }
};

export default Auth;
