// Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

// Routes
const deviceRouter = require('./routes/device');
const deckRouter = require('./routes/deck');
const adminRouter = require('./routes/admin');
const commandsRouter = require('./routes/commands');

// Define App
const app = express();

// Store Program Data
let programData = {
  commands: []
};

fs.readFile(path.resolve(__dirname, 'database', 'storage.json'), (err, data) => {
  if (err) {
    fs.mkdirSync(path.resolve(__dirname, 'database'));
    fs.writeFile(path.resolve(__dirname, 'database', 'storage.json'), JSON.stringify(programData), () => {});
    return;
  }
  programData = JSON.parse(data);
});

// Middleware Commands
app.use((req, res, next) => {
  req.programData = programData;

  return next();
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Server config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', deviceRouter);
app.use('/admin', adminRouter)
app.use('/deck', deckRouter);
app.use('/commands', commandsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = "Error | Virtual Deck"

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
