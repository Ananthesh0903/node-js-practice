const express = require('express');
const { getProducts, getProduct, updateProduct, createProduct, deleteProduct } = require('../controllers/products.controller');
const router = express.Router();
const Product = require('../models/products');
router.get('/',getProducts);
router.get('/:id',getProduct);
router.put('/:id',updateProduct);
router.post('/',createProduct);
router.delete('/:id',deleteProduct);

module.exports = router;