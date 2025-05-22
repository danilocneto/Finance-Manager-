// Controlador da rota /obra
exports.index = (req, res) => {
  res.render('pages/obra', {
    titulo: 'Obras',
    descricao: 'Esta é a página sobre alguma obra da fortal.'
  });
};