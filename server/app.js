const express = require('express');
const cors = require('cors');
const rootRouter = require ('./routes');

const errorHandler = require('./middlewares/errorHandler.js');

const app = express();

app.use(cors());

app.use(express.json());

//app.use(express.static('public'));

app.use('/api/', rootRouter);

app.use(errorHandler);


module.exports = app;