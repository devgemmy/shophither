require('dotenv').config();
require('mongoose').connect('mongodb://localhost:27017/kina', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true
})

const express = require('express');
const userRoutes = require('./routes/users.route')
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.listen(4000, () => {
  console.log("App started");
})
