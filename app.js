var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apartmentRouter = require('./routes/apartments');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Apartment = require("./models/apartmentSchema"); // Corrected import
var resourceRouter = require('./routes/resource');
var app = express();

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

async function recreateDB() {
  console.log("**********");

  // Delete everything
  await Apartment.deleteMany();
  let instance1 = new Apartment({ apartment_name: "Costal Breezes Apartments", location: "Miami, FL", rent: 2200 }); // Corrected rent value
  instance1.save().then(doc => { console.log("First object saved") }).catch(err => {
    console.error(err);
  });
  let instance2 = new Apartment({ apartment_name: "Parkside Heights", location: "New York City, NY", rent: 3500 }); // Corrected rent value
  instance2.save().then(doc => { console.log("Second object saved") }).catch(err => {
    console.error(err);
  });
  let instance3 = new Apartment({ apartment_name: "Harbour View Residences", location: "San Francisco, CA", rent: 4000 }); // Corrected rent value
  instance3.save().then(doc => { console.log("Third object saved") }).catch(err => {
    console.error(err);
  });
  let instance4 = new Apartment({ apartment_name: "Woodland Pines Apartments", location: "Austin, TX", rent: 1800 }); // Corrected rent value
  instance4.save().then(doc => { console.log("Fourth object saved") }).catch(err => {
    console.error(err);
  });
  let instance5 = new Apartment({ apartment_name: "Lakeside Landing", location: "Minneapolis, MN", rent: 1600 }); // Corrected rent value
  instance5.save().then(doc => { console.log("Fifth object saved") }).catch(err => {
    console.error(err);
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/apartments', apartmentRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
