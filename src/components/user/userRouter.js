'use strict';
import * as userController from './userController';

export function userRouter(router) {
  router.get('/user/greeting', userController.greeting);

  router.post('/user/multiple', userController.multipleNewUsers);

  router.post('/user/create', userController.createNewUser);

  router.get('/users', userController.getAllUser);

  router.get('/user:id', userController.getUser);

  router.put('/user:id', userController.updateUser);

  router.delete('/user:id', userController.deleteUser);
}
