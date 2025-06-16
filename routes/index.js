const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const obra = require('../controllers/obraController');
const nota = require('../controllers/notaController');
const despesa = require('../controllers/despesasController');

console.log(despesa.getSalariosByObraId);

// Rota principal
router.get('/', home.index);

// Rota da página "Obra"
router.get('/obra/:id', obra.getObraById);
router.post('/obra/:id/nota/add', obra.addNotaFiscal);
router.post('/obra/:id/despesa/add', obra.addDespesa);

// Rota da página "Despesas"
router.get('/salarios/:id', despesa.getSalariosByObraId);
router.get('/despesa_equipe/:id', despesa.getDespesaEquipeByObraId);
router.get('/maquinarios/:id', despesa.getMaquinariosByObraId);
router.get('/veiculos/:id', despesa.getVeiculosByObraId);
router.get('/diversos/:id', despesa.getDiversosByObraId);

router.post('/salarios/:id', despesa.deleteSalario);
router.post('/despesa_equipe/:id', despesa.deleteDespesaEquipe);
router.post('/maquinarios/:id', despesa.deleteMaquinario);
router.post('/veiculos/:id', despesa.deleteVeiculo);
router.post('/diversos/:id', despesa.deleteDiverso);


// Rota da página "Nota"
router.get('/nota', nota.findNotaByObraId);
router.get('/nota/:id_obra', nota.findNotaByObraId);
router.post('/nota/add', nota.createNota);
router.post('/nota/edit/:id', nota.updateNota);
router.post('/nota/delete/:id', nota.deleteNota);


module.exports = router;