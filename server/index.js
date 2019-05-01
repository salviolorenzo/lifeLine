const db = require('./models/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const User = require('./models/User');

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

app.use((req, res, next) => {
  let isLoggedIn = req.session.user ? true : false;
  next();
});

app.use(express.static('public'));

app.get('/:userId/friends', (req, res) => {
  User.getUserFriends(req.params.user_id).then(friends => {
    res.json(friends);
  });
});

app.post('/api/login', (req, res) => {
  User.getByEmail(req.body.email).then(user => {
    req.session.user = user;
    const doesMatch = user.checkPassword(req.body.password);
    res.send(doesMatch);
  });
});

app.post('/api/register', (req, res) => {
  User.addUser(req.body.name, req.body.email, req.body.password).then(
    result => {
      console.log(result);
      req.session.user = result;
      res.send(result);
    }
  );
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(4000, () => {
  console.log('Listening on 4000...');
});
