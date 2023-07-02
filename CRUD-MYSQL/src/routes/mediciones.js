const router2 = require('express').Router();
const medicionesController=require('../controllers/medicionesController');

router2.get('/', medicionesController.list);
router2.post('/add', medicionesController.save);
router2.get('/search',medicionesController.search);
router2.get('/update/:id', medicionesController.edit);
router2.post('/update/:id', medicionesController.update);
router2.get('/delete/:id', medicionesController.delete);

module.exports = router2;