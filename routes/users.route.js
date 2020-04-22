const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

router.get('/', User.find())
      .post('/', User.find())

router.getOne('/:id', User.findOne())
      .create('/:id', User.create())
      .update('/:id', User.updateOne())
      .delete('/:id', User.remove())

module.exports = router;
