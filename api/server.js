const express = require('express');
const helmet = require('helmet');

// const dishRouter = require('./dishes/dish-router');
// const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/route/', dishRouter);
// server.use('/api/route/', recipeRouter);

server.use('/', (req, res) => {
  res.send("Up and running")
});

module.exports = server;