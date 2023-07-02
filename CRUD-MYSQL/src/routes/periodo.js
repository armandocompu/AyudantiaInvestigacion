const router2 = require('express').Router();
const periodoController=require('../controllers/periodoController');

router2.get('/', periodoController.list);
router2.post('/add', periodoController.save);
router2.get('/search',periodoController.search);
router2.get('/update/:id', periodoController.edit);
router2.post('/update/:id', periodoController.update);
router2.get('/delete/:id', periodoController.delete);

module.exports = router2;