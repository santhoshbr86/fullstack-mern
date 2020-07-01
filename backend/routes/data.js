var express = require('express');
var router = express.Router();
var data = require('../middlware/data');

router.get('/', data.getData);
router.post('/', data.addData);

module.exports = router;
