const router = require('express').Router();

const activosController = require('../controllers/activosController');

router.get('/activos', activosController.list);
router.post('/activos/add', activosController.save);
router.get('/activos/update/:id', activosController.edit);
router.post('/activos/update/:id', activosController.update);
router.get('/activos/delete/:id', activosController.delete);

module.exports = router;