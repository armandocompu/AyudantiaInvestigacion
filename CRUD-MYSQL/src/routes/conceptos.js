const router2 = require('express').Router();

const conceptosController = require('../controllers/conceptosController');
const activosController = require('../controllers/activosController');
const fuentesController = require('../controllers/fuentesController');
const definicionesController=require('../controllers/definicionesController');
const indicadoresController=require('../controllers/indicadoresController');
const medicionesController=require('../controllers/medicionesController');
const periodoController=require('../controllers/periodoController');
const programaController=require('../controllers/programaController');
const sinonimosController=require('../controllers/sinonimosController');
const tiposactivoController=require('../controllers/tipoactivoController');

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

router2.get('/definiciones', definicionesController.list);
router2.post('/definiciones/add', definicionesController.save);
router2.get('/definiciones/update/:id', definicionesController.edit);
router2.post('/definiciones/update/:id', definicionesController.update);
router2.get('/definiciones/delete/:id', definicionesController.delete);

router2.get('/indicadores', indicadoresController.list);
router2.post('/indicadores/add', indicadoresController.save);
router2.get('/indicadores/update/:id', indicadoresController.edit);
router2.post('/indicadores/update/:id', indicadoresController.update);
router2.get('/indicadores/delete/:id', indicadoresController.delete);

router2.get('/mediciones', medicionesController.list);
router2.post('/mediciones/add', medicionesController.save);
router2.get('/mediciones/update/:id', medicionesController.edit);
router2.post('/mediciones/update/:id', medicionesController.update);
router2.get('/mediciones/delete/:id', medicionesController.delete);


router2.get('/periodosescolares', periodoController.list);
router2.post('/periodosescolares/add', periodoController.save);
router2.get('/periodosescolares/update/:id', periodoController.edit);
router2.post('/periodosescolares/update/:id', periodoController.update);
router2.get('/periodosescolares/delete/:id', periodoController.delete);

router2.get('/programas', programaController.list);
router2.post('/programas/add', programaController.save);
router2.get('/programas/update/:id', programaController.edit);
router2.post('/programas/update/:id', programaController.update);
router2.get('/programas/delete/:id', programaController.delete);

router2.get('/sinonimos', sinonimosController.list);
router2.post('/sinonimos/add', sinonimosController.save);
router2.get('/sinonimos/update/:id', sinonimosController.edit);
router2.post('/sinonimos/update/:id', sinonimosController.update);
router2.get('/sinonimos/delete/:id', sinonimosController.delete);

router2.get('/tiposactivo', tiposactivoController.list);
router2.post('/tiposactivo/add', tiposactivoController.save);
router2.get('/tiposactivo/update/:id', tiposactivoController.edit);
router2.post('/tiposactivo/update/:id', tiposactivoController.update);
router2.get('/tiposactivo/delete/:id', tiposactivoController.delete);

module.exports = router2;