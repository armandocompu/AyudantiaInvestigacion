const router = require('express').Router();

const activosController = require('../controllers/activosController');

router.get('/', activosController.list);
router.post('/add', activosController.save);
router.get('/update/:id', activosController.edit);
router.post('/update/:id', activosController.update);
router.get('/delete/:id', activosController.delete);

module.exports = router;