const router2 = require('express').Router();
const sinonimosController=require('../controllers/sinonimosController');

router2.get('/', sinonimosController.list);
router2.post('/add', sinonimosController.save);
router2.get('/search',sinonimosController.search);
router2.get('/update/:id', sinonimosController.edit);
router2.post('/update/:id', sinonimosController.update);
router2.get('/delete/:id', sinonimosController.delete);

module.exports = router2;