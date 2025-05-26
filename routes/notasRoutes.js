const express = require('express');
const router = express.Router();
const nota = require('../controllers/notaController');

router.post('/add', nota.store);
router.post('/edit/:id', nota.update);
router.post('/delete/:id', nota.destroy);

module.exports = router;
