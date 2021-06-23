const { Router } = require('express');
const { UsersController } = require('../controllers');

const UsersRouter = new Router();

UsersRouter.get('/', UsersController.findAll);

module.exports = UsersRouter;
