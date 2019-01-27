/**
 ** Route for posting the loginInformation
 **
 **/

 const router = require('express').Router();
const db = require('../../db');
const randomString = require('randomstring');
let userLogin = require('../../userLogin');

/**
 ** Function checking if there is a login and a password in the body then call
 ** the post function.
 **
 **/
router.post('/', function(req, res, next) {
	let pool = db.getPool();
	let values = null;

	if (!pool) {
		res.status(500).send('Something broke!');
	} else if (!req.body.login || !req.body.password) {
		res.status(400).send('Please put a login and a password to log in');
	} else {
		postUser(req.body, res);
	}
})

/**
 ** Post the login and the password in the database then create a token and set
 ** the UserId. After we call a fonction to create an InformationUser
 ** for the update route.
 **
 **/
const postUser = function(body, res) {
	values = [body.login, body.password];
	db.getPool().query('INSERT INTO SBUser (Login, Password) VALUES(?, ?)',
	values, function(err, result) {
		if (err) {
			res.status(500).send('An error occured');
		} else {
			userLogin.setToken(randomString.generate());
			userLogin.setUserId(result.insertId);
			postInformationUser(result.insertId, res);
		}
	});
}

/**
 ** Creating InformationUser in the database
 **
 **/
const postInformationUser = function(userId, res) {
	let values = [userId, '', '', '', new Date(), '', '', '', '0'];

	db.getPool().query('INSERT INTO SBInformationUser' +
	'(SBInformationUserID, FirstName, LastName, Email, BirthDate,' +
	'BoatImmatriculation, Maker, Model, Total)' +
	'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', values, function(err, result) {
		if (err) {
			res.status(500).send('An error occured');
		} else {
			res.send({'token': userLogin.getToken()});
		}
	});
}

module.exports = router;