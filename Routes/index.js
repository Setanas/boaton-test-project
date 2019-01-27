/**
 ** File regrouping all the api routes
 **
 **/

const router = require('express').Router();

router.use('/api', require('./Api'));

module.exports = router;