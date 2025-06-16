const Nota = require('../models/notaModel');
const Obra = require('../models/obraModel');

const notaController = {
  async findNotaByObraId(req, res) {
    const { id_obra } = req.params;

    try {
      const notas = await Nota.findNotasByObraId(id_obra);
      const obra = await Obra.findObraById(id_obra);
      res.render('pages/nota', { notas, id_obra, nome_obra: obra ? obra.nome : '' });
    } catch (error) {
      console.error('Erro ao buscar notas fiscais por ID da obra:', error);
      res.status(500).json({ success: false, error: 'Erro ao buscar notas fiscais' });
    }
  },

  async createNota(req, res) {
    const { numero, valor, data_emissao, id_obra } = req.body;

    try {
      const nota = await Nota.createNF({ numero, valor, data_emissao, id_obra });
      res.redirect(`/nota/${id_obra}`);
    } catch (error) {
      console.error('Erro ao criar nota fiscal:', error);
      res.status(500).json({ success: false, error: 'Erro ao criar nota fiscal' });
    }
    
    
  },

  async updateNota(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Nota.updateNF(id, data);
      res.redirect(`/nota/${data.id_obra}`);
    } catch (error) {
      console.error('Erro ao atualizar nota fiscal:', error);
      res.status(500).json({ success: false, error: 'Erro ao atualizar nota fiscal' });
    }
    
  },

  async deleteNota(req, res) {
    const { id } = req.params;
    const { id_obra } = req.body;
    try {
      await Nota.deleteNF(id);
      res.redirect(`/nota/${id_obra}`);
    } catch (error) {
      console.error('Erro ao deletar nota fiscal:', error);
      res.status(500).json({ success: false, error: 'Erro ao deletar nota fiscal' });
    }
  }
};

module.exports = notaController;
