const express = require('express');
const router = express.Router();

// @route GET api/profile
// @description Test route
// @acess Public

router.get('/', (req, res) => res.send('Profile rote'));

module.exports = router;
