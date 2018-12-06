var keystone = require('keystone');
var User = keystone.list('User');

const keystone_email = require('../config/keys').keystone_email;
const keystone_password = require('../config/keys').keystone_password;

exports = module.exports = function (done) {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: `${keystone_email}`,
		password: `${keystone_password}`,
		canAccessKeystone: true,
	}).save(done);
};