// Controlador da rota /Dashboard 
exports.index = (req, res) => {
  res.render('pages/dashboard', {
    titulo: 'Dashboard',
    descricao: 'Esta é a página com o Dashboard da empresa.'
  });
};