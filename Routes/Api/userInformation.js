/**
 ** Route for updating the userInformation
 **
 **/

const router = require('express').Router();
const db = require('../../db');
let userLogin = require('../../userLogin')

/**
 ** To use this route write this: http://localhost:3002/api/userInformation
 ** This function will check the token given in the header with the token given
 ** after the login to allow the update.
 **
 **/
router.put('/', function(req, res, next) {
	let body = req.body;

	if (!userLogin.getToken()){
		res.status(401).send('You are not log in');
	} else if (req.headers.token !== userLogin.getToken()) {
		res.status(424).send('The token doesn\'t correspond to the given token');
	} else if (!body.nom || !body.prenom || !body.email ||
	!body.birthdate || !body.immatriculation || !body.maker ||
	!body.model || !body.total) {
		res.status(406).send('Body parameters are not correct');
	} else {
		updateUserInformation(body, res);
	}
})

/**
 ** After checking if the body is complete, this function will update
 ** the database.
 **
 **/
let updateUserInformation = function(body, res) {
	const values = [body.prenom, body.nom, body.email, body.birthdate,
	body.immatriculation, body.maker, body.model, body.total,
	userLogin.getUserId()];

	db.getPool().query('UPDATE SBInformationUser SET FirstName = ?,' +
	'LastName = ?, Email = ?, BirthDate = ?, BoatImmatriculation = ?,' + 
	'Maker = ?, Model = ?, Total = ? Where SBInformationUserID = ?',
	values, function(err, result) {
		if (err) {
			res.status(500).send('An error occured');
		} else {
			res.send({"total" : body.total});
		}
	});
}

module.exports = router;