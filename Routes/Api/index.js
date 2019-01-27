/**
 ** File regrouping all route
 **
 **/

const router = require('express').Router();

router.use('/login', require('./login'));
router.use('/userInformation', require('./userInformation'));

module.exports = router;