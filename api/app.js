const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const testAPIRouter = require("./src/routes/testAPI");
const { getDates } = require('./src/database/dates')
const { startDatabase } = require('./src/app-common.js')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
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
}); */

app.get('/getDate', getDates);

startDatabase().then(async () => {
  // `then` start the web server after the database starts
  app.listen(9000, async () => {
    console.log('Web server has started on port 9000 http://localhost:9000');
  });
});

module.exports = {
  app
}
