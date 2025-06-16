const Obra = require('../models/obraModel');

const homeController = {
  async index(req, res) {
    try {
      const obras = await Obra.findAllObras();

      console.log('Obras carregadas para a Home:', obras);

      res.render('pages/home', {
        titulo: 'Página Home',
        mensagem: 'Bem-vindo ao Finance Manager da FORTAL!',
        obras
      });
    } catch (error) {
      console.error('Erro ao carregar a página Home:', error);
      res.status(500).send('Erro ao carregar as obras');
    }
  }
};

module.exports = homeController;
