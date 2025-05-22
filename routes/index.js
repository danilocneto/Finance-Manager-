const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const obra = require('../controllers/obraController');
const nota = require('../controllers/notaController');
const dashboard = require('../controllers/dashboardController');

// Rota principal
router.get('/', home.index);

// Rota da página "Obra"
router.get('/obra', obra.index);

// Rota da página "Nota"
router.get('/nota', nota.index);

// Rota da página "Dashboard"
router.get('/dashboard', dashboard.index);

module.exports = router;