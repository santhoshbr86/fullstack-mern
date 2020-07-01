var express = require('express');
var router = express.Router();
var products= require('../middlware/products');

router.get('/', products.getProducts);
router.post('/', products.addProduct);
router.delete('/:id', products.removeProduct);
// router.patch('/:id', products.updateProduct);
module.exports = router;
