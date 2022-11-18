const router2 = require('express').Router();

const conceptosController = require('../controllers/conceptosController');
const activosController = require('../controllers/activosController');
const fuentesController = require('../controllers/fuentesController');

router2.get('/', conceptosController.list);
router2.post('/add', conceptosController.save);
router2.get('/update/:id', conceptosController.edit);
router2.post('/update/:id', conceptosController.update);
router2.get('/delete/:id', conceptosController.delete);

router2.get('/activos', activosController.list);
router2.post('/activos/add', activosController.save);
router2.get('/activos/update/:id', activosController.edit);
router2.post('/activos/update/:id', activosController.update);
router2.get('/activos/delete/:id', activosController.delete);

router2.get('/fuentes', fuentesController.list);
router2.post('/fuentes/add', fuentesController.save);
router2.get('/fuentes/update/:id', fuentesController.edit);
router2.post('/fuentes/update/:id', fuentesController.update);
router2.get('/fuentes/delete/:id', fuentesController.delete);

module.exports = router2;