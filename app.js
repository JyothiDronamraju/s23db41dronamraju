var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )

require('dotenv').config();
const connectionString = process.env.MONGO_CON
const mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    wtimeoutMS:50000
  });
//Get the default connections

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apartmentRouter = require('./routes/apartments');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Apartment = require("./models/apartment");
var resourceRouter = require('./routes/resource');
var app = express();


//const Apartment = mongoose.model("Apartment", apartmentSchema);


// We can seed the collection if needed onserver start
async function  recreateDB() {
  
  console.log("**********")
  // Delete everything
 // mongoose.set('bufferTimeoutMS', 50000);
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
// mongoose.connection.close();
let reseed = true;
if (reseed) { recreateDB(); }


  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
passport.use(new LocalStrategy(
function(username, password, done) {
Account.findOne({ username: username })
.then(function (user){
if (err) { return done(err); }
if (!user) {
return done(null, false, { message: 'Incorrect username.' });
}
if (!user.validPassword(password)) {
return done(null, false, { message: 'Incorrect password.' });
}
return done(null, user);
})
.catch(function(err){
return done(err)
})
})
)

app.use(express.static(path.join(__dirname, 'public')));
app.use('/apartments', apartmentRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);
// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;