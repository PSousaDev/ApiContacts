const { Router } = require('express');
const ContacController = require('./app/controllers/contactController');

const router = Router();

router.get('/contacts', ContacController.index);
module.exports = router;
