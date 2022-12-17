const { Router } = require('express');
const {
  Index, Delete, Show, store, update,
} = require('./controllers/contactController');
const CategoryController = require('./controllers/categoryController');

const router = Router();

router.get('/contacts', Index);
router.get('/contacts/:id', Show);
router.delete('/contacts/:id', Delete);
router.post('/contacts', store);
router.put('/contacts/:id', update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
module.exports = router;
