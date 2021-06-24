const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares/errorHandler/errorHandler');
const { UsersRouter } = require('./routes');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', UsersRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
