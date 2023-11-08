const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apartmentsRouter = require('./routes/apartments');
const boardRouter = require('./routes/board');
const chooseRouter = require('./routes/choose');
const resourceRouter = require('./routes/resource'); // Updated to use resource router
const Costume = require('./models/costume');

const app = express();

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

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(connectionString, mongooseOptions)
  .then(() => {
    console.log('Connection to DB succeeded');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

// Define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apartments', apartmentsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter); // Updated to use the resource router

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

// Set the port if not available
const port = process.env.PORT || 3000; // Port 3000 is the default port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
