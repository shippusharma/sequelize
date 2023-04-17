'use strict';
import * as adminController from './adminController';

export function adminRouter(router) {
  router.post('/create', adminController.createNewAdmin);

  router.get('/all', adminController.getAllAdmin);

  router.get('/:id', adminController.getAdmin);

  router.put('/:id', adminController.updateAdmin);

  router.delete('/:id', adminController.deleteAdmin);
}
