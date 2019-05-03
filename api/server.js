const express = require('express');
const helmet = require('helmet');

const dishRouter = require('./dish-router');
const recipeRouter = require('./recipe-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes/', dishRouter);
server.use('/api/recipes/', recipeRouter);

server.use('/', (req, res) => {
  res.send("Up and running")
});

module.exports = server;