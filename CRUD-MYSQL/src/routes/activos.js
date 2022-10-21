const express = require('express');
const router = express.Router();

const activosController=require('../controllers/activosController');

router.get('/', activosController.list); 

module.exports = router;