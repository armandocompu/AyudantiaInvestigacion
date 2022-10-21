const router = require('express').Router();

const activosController=require('../controllers/activosController');

router.get('/', activosController.list); 

module.exports = router;