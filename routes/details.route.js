const express = require('express');
const { getDetail, getDetails, updateDetail, createDetail, deleteDetail } = require('../controllers/details.controller');
const router = express.Router();
const Product = require('../models/details');
router.get('/',getDetails);
router.get('/:id',getDetail);
router.put('/:id',updateDetail);
router.post('/',createDetail);
router.delete('/:id',deleteDetail);

module.exports = router;