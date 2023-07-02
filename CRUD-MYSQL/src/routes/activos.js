const router = require('express').Router();

const activosController = require('../controllers/activosController');
//console.log("hola estoy en activos");

router.get('/', activosController.list);
router.get('/search',activosController.search);
router.post('/add', activosController.save);
router.get('/update/:id', activosController.edit);
router.post('/update/:id', activosController.update);
router.get('/delete/:id', activosController.delete);

module.exports = router;