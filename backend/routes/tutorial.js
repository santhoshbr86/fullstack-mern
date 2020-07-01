var express = require('express');
var router = express.Router();
var tutorial= require('../middlware/tutorial');

router.get('/', tutorial.getTutorial);
router.post('/', tutorial.addTutorial);
router.delete('/:id', tutorial.removeTutorial)

module.exports = router;
