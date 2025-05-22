// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/home', {
    titulo: 'Página Home',
    mensagem: 'Bem-vindo ao Finance Manager da FORTAL!'
  });
};