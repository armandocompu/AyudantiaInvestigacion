const router2 = require('express').Router();
const programaController=require('../controllers/programaController');

router2.get('/', programaController.list);
router2.post('/add', programaController.save);
router2.get('/update/:id', programaController.edit);
router2.post('/update/:id', programaController.update);
router2.get('/delete/:id', programaController.delete);

module.exports = router2;