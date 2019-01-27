/**
 ** File to keep the token and the userId of an User
 **
 **/

let token = null;
let userId = null;

exports.setToken = function(generatedToken) {
	token = generatedToken;
}

exports.getToken = function() {
	return token;
}

exports.setUserId = function(generatedId) {
	userId = generatedId;
}

exports.getUserId = function() {
	return userId;
}
