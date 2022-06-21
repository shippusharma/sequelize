'use strict';
import express from 'express';
import UserController from '../components/user/UserController';

const router = express.Router();

router.post('/create', UserController.createNewUser);

export default router;
