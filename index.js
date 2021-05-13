require('dotenv').config();
require('mongoose').connect('mongodb://localhost:27017/kina', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});

const express = require('express');
const userRoutes = require('./users/routes.config');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  const error = err.toString() !== '[object Object]' ? err.toString() : err;
  res.json({
    error
  });
});

app.listen(4556, () => {
  console.log("App started");
});
