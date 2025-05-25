const Obra = require('../models/obraModel');

exports.index = async (req, res) => {
  try {
    const obras = await Obra.findAllObras(); 
    console.log('ola');
    res.render('pages/home', {
      titulo: 'Página Home',
      mensagem: 'Bem-vindo ao Finance Manager da FORTAL!',
      obras
    });
  } catch (err) {
    console.error('Erro ao buscar obras:', err);
    res.status(500).send('Erro ao buscar obras');
  }
};
