const Nota = require('../models/notaModel');

// Controlador da rota /Notas 
exports.index = async (req, res) => {

  const notas = await Nota.findAllNF();
  res.render('pages/nota', {
    titulo: 'Notas Fiscais',
    descricao: 'Esta é a página com as Notas Fiscais da FORTAL.',
    notas
  });
};

exports.store = async (req, res) => {
  await Nota.createNF(req.body);
  res.redirect('/nota');

}

exports.update = async (req, res) => {
  const {id} = req.params;
  await Nota.updateNF(id, req.body);
  res.redirect('/nota')
}


exports.destroy = async (req, res) => {
  const {id} = req.params;
  await Nota.deleteNF(id);
  res.redirect('/nota');

}