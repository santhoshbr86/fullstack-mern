var express = require('express');
var router = express.Router();
var order= require('../middlware/order');

router.get('/', order.getOrder);
router.post('/', order.addOrder);
router.delete('/:id', order.removeOrder);
// router.patch('/:id', products.updateProduct);
module.exports = router;
