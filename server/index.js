const db = require('./models/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const users = require('./models/users');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    store: new pgSession({
      pgPromise: db
    }),
    secret: 'sdfhgdfhgfhfgdhgf',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(cookieParser());

// Use CORS and File Upload modules here
app.use(cors());
app.use(fileUpload());

app.use('/public', express.static(__dirname + '/public'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message, error: err });
});

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  next();
});

app.get('/', (req, res) => {
  res.json('ROOT');
});

app.get('/api/users', (req, res) => {
  users.getUsers().then(results => {
    res.json(results);
  });
});

app.get('/api/:userId/friends', (req, res) => {
  users.getUserFriends(req.params.user_id).then(friends => {
    res.json(friends);
  });
});

app.post('/api/login', (req, res) => {
  users.getByEmail(req.body.email).then(user => {
    req.session.user = user;
    const doesMatch = user.checkPassword(req.body.password);
    res.send(doesMatch);
  });
});

app.post('/api/register', (req, res) => {
  users
    .addUser(req.body.name, req.body.email, req.body.password)
    .then(result => {
      console.log(result);
      req.session.user = result;
      res.send(result);
    });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.listen(4000, () => {
  console.log('Listening on 4000...');
});
