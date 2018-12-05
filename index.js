//import keystone
var keystone = require('keystone');

const db = require('./server/config/keys').mongoURI;
const cookie_secret = require('./server/config/keys').cookieSecret;

// Set up our keystone instance
keystone.init({
  'name': 'Keystone CMS',
  // Paths to our application static files
  'static': [],
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': `${db}`,
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': `${cookie_secret}`,
});

keystone.import('./server/models');

// Add routes here 

keystone.start();