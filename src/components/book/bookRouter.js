'use strict';
import * as bookController from './bookController';

export function bookRouter(router) {
  router.get('/books', bookController.getAllBooks);

  router.post('/book/create', bookController.createNewBook);
}
