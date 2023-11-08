var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apartmentsRouter = require('./routes/apartments');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');

mongoose.connect(connectionString);

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
  console.log('Connection to DB succeeded');
});

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apartments', apartmentsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);

// Handle 404 and errors
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // Handle errors
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
