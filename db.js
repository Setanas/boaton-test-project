const mysql = require('mysql');
let pool = null;

/**
 ** Connection to a pool of data
 ** change the user and the password with your own to launch the database
 **
 **/
exports.connect = function(done) {
	pool = mysql.createPool({
		host: 'localhost.localdomain',
		user: 'stan',
		password: 'password',
		database: 'boatonchfqadminb'
	});
	if (!pool) {
		done(new Error('Cannot connect to database'));
	} else {
		done();
	}
}

exports.getPool = function() {
	return pool;
}