const express = require('express');

const router = express.Router();
const homepage = require('./homepage');

router.get('/' ,homepage.showHomepage);
module.exports = router;
