const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler/errorHandler');
const {
  UsersRouter, BranchesRouter, OrdersRouter, MenusRouter, ProductsRouter, PromotionsRouter,
} = require('./controllers');

require('dotenv').config();

const corsOptions = {
  credentials: true,
  origin: true,
};

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(PromotionsRouter.basePath, PromotionsRouter.setRouter());
app.use(UsersRouter.basePath, UsersRouter.setRouter());
app.use(BranchesRouter.basePath, BranchesRouter.setRouter());
app.use(OrdersRouter.basePath, OrdersRouter.setRouter());
app.use(MenusRouter.basePath, MenusRouter.setRouter());
app.use(ProductsRouter.basePath, ProductsRouter.setRouter());

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
