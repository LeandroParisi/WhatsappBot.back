const express = require('express');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler/errorHandler');
const UserController = require('./controllers/Users/UsersController');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(UserController.basePath, UserController.setRouter());

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
