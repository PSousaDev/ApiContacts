const { Router } = require('express');
const {
  Index, Delete, Show, store, update,
} = require('./controllers/contactController');

const router = Router();

router.get('/contacts', Index);
router.get('/contacts/:id', Show);
router.delete('/contacts/:id', Delete);
router.post('/contacts', store);
router.put('/contacts/:id', update);
module.exports = router;
