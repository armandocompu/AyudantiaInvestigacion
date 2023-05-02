const router2 = require('express').Router();
const tiposactivoController=require('../controllers/tipoactivoController');

router2.get('/', tiposactivoController.list);
router2.post('/add', tiposactivoController.save);
router2.get('/update/:id', tiposactivoController.edit);
router2.post('/update/:id', tiposactivoController.update);
router2.get('/delete/:id', tiposactivoController.delete);

module.exports = router2;