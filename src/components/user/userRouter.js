'use strict';
import * as userController from './userController';

export function userRouter(router) {
  router.get('/greeting', userController.greeting);

  router.post('/multiple', userController.multipleNewUsers);

  router.post('/create', userController.createNewUser);

  router.get('/all', userController.getAllUser);

  router.get('/:id', userController.getUser);

  router.put('/:id', userController.updateUser);

  router.delete('/:id', userController.deleteUser);
}
