const router2 = require('express').Router();
const fuentesController = require('../controllers/fuentesController');

router2.get('/', fuentesController.list);
router2.post('/add', fuentesController.save);
router2.get('/search',fuentesController.search);
router2.get('/update/:id', fuentesController.edit);
router2.post('/update/:id', fuentesController.update);
router2.get('/delete/:id', fuentesController.delete);

module.exports = router2;