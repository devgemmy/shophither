require('dotenv').config();
require('mongoose').connect('mongodb://localhost:27017/kina', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
});

const express = require('express');
const userRoutes = require('./routes/users.route');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

<<<<<<< HEAD
app.use((error, req, res, next) => {
  const errorString = error.toString() == '[]' ? error : error.toString();
  res.json({
    error: errorString
  });
  
=======
app.use((err, req, res, next) => {
  const error = err.toString() !== '[object Object]' ? err.toString() : err;
  res.json({
    error
  });
>>>>>>> a1276046a7f7fe42c828ed01c255227b9a7ea8cc
});

app.listen(4556, () => {
  console.log("App started");
});
