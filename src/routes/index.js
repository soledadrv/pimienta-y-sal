const express = require('express');
const router = express.Router();
const { index, detalle } = require('../controllers/indexController.js')


router.get('/', index);

router.get('/detalle/:id', detalle);


module.exports = router;