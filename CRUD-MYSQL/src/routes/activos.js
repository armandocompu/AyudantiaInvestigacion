const express = require('express');
const router = express.Router();

const activosController=require('../controllers/activosController');

router.get('/', activosController.list); 
router.post('/add',activosController.save);

module.exports = router;