const { Router } = require('express');
const { errorCatcher } = require('../middlewares/errorHandler/errorHandler');
const { UsersController } = require('../controllers');

const UsersRouter = new Router();

UsersRouter.get('/', UsersController.findAll);

UsersRouter.post('/', errorCatcher(UsersController.createUser));

module.exports = UsersRouter;
