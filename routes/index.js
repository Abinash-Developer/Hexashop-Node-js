const express = require("express");
const router = express.Router();
router.get('/',require('./web'));
module.exports = router;