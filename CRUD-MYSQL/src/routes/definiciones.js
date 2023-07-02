const router2 = require('express').Router();
const definicionesController=require('../controllers/definicionesController');
const router = require('./activos');

router2.get('/', definicionesController.list);
router2.post('/add', definicionesController.save);
router2.get('/search/',definicionesController.search);
router2.get('/update/:id', definicionesController.edit);
router2.post('/update/:id', definicionesController.update);
router2.get('/delete/:id', definicionesController.delete);

module.exports = router2;