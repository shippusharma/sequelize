'use strict';
import express from 'express';
import UserController from '../components/user/UserController';

const router = express.Router();

router.post('/create', UserController.createNewUser);

router.get('/all', UserController.getAllUser);

router.get('/:id', UserController.getUser);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

export default router;
