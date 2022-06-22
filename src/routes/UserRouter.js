'use strict';
import express from 'express';
import UserController from '../components/user/UserController';

const router = express.Router();

router.post('/create', UserController.createNewUser);

router.get('/users', UserController.getAllUser);

router.get('/:id', UserController.getUser);

router.post('/:id', UserController.updateUser);

router.post('/:id', UserController.deleteUser);

export default router;
