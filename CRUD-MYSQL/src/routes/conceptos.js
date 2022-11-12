const router2 = require('express').Router();

const conceptosController = require('../controllers/conceptosController');

router2.get('/', conceptosController.list);
router2.post('/add', conceptosController.save);
router2.get('/update/:id', conceptosController.edit);
router2.post('/update/:id', conceptosController.update);
router2.get('/delete/:id', conceptosController.delete);

module.exports = router2;