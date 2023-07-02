const router2 = require('express').Router();
const indicadoresController=require('../controllers/indicadoresController');

router2.get('/', indicadoresController.list);
router2.post('/add', indicadoresController.save);
router2.get('/search',indicadoresController.search);
router2.get('/update/:id', indicadoresController.edit);
router2.post('/update/:id', indicadoresController.update);
router2.get('/delete/:id', indicadoresController.delete);

module.exports = router2;