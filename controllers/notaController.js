// Controlador da rota /Notas 
exports.index = (req, res) => {
  res.render('pages/nota', {
    titulo: 'Notas Fiscais',
    descricao: 'Esta é a página com as Notas Fiscais da FORTAL.'
  });
};