const router = require('express').Router();
const UserController = require('../controllers/users.controller');
const $ = require('express-async-handler');

router.route('/')
      .get(UserController.get)
      .post(UserController.create);

router.route('/:id')
      .get(UserController.getOne)
      .put(UserController.update)
      .delete(UserController.delete);

module.exports = router;
