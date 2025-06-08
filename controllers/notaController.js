const Nota = require('../models/notaModel');
const Obra = require('../models/obraModel');

// Controlador da rota /Notas 
exports.index = async (req, res) => {
  const notas = await Nota.findAllNF();
  const obras = await Obra.findAllObras();
  res.render('pages/nota', {
    titulo: 'Notas Fiscais',
    descricao: 'Esta é a página com as Notas Fiscais da FORTAL.',
    notas,
    obras
  });
};

exports.store = async (req, res) => {
  await Nota.createNF(req.body);
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.json({ success: true });
  }
  res.redirect('/nota');
}

exports.update = async (req, res) => {
  const {id} = req.params;
  await Nota.updateNF(id, req.body);
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.json({ success: true });
  }
  res.redirect('/nota');
}

exports.destroy = async (req, res) => {
  const {id} = req.params;
  await Nota.deleteNF(id);
  if (req.headers.accept && req.headers.accept.includes('application/json')) {
    return res.json({ success: true });
  }
  res.redirect('/nota');
}



