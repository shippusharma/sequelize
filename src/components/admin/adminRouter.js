'use strict';
import * as adminController from './adminController';

export function adminRouter(router) {
  router.post('/admin/create', adminController.createNewAdmin);

  router.get('/admins', adminController.getAllAdmin);

  router.get('/admin:id', adminController.getAdmin);

  router.put('/admin:id', adminController.updateAdmin);

  router.delete('/admin:id', adminController.deleteAdmin);
}
