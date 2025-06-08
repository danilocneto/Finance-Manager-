const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const obra = require('../controllers/obraController');
const nota = require('../controllers/notaController');
const dashboard = require('../controllers/dashboardController');

// Rota principal
router.get('/', home.index);

// Rota da página "Obra"
router.get('/obra/:id', obra.getObraById);
router.post('/obra/:id/nota/add', obra.addNotaFiscal);
router.post('/obra/:id/despesa/add', obra.addDespesa);

// Rota da página "Nota"
router.get('/nota', nota.index);
router.post('/nota/add', nota.store);
router.post('/nota/edit/:id', nota.update);
router.post('/nota/delete/:id', nota.destroy);

// Rota da página "Dashboard"
router.get('/dashboard', dashboard.index);

module.exports = router;