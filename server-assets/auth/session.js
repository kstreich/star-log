let expressSession = require('express-session');
let mongoStore = require('connect-mongodb-session')(expressSession);
let store = new mongoStore({
  uri: 'mongodb://student:student1@ds038888.mlab.com:38888/star-logs',
  collection: 'Sessions'
});
store.on('error', function (error) {
  console.log('[Session Error]', error);
});
let session = expressSession({
  secret: " I don't know what goes here",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;
