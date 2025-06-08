const Obra = require('../models/obraModel');
const Nota = require('../models/notaModel');
const Salario = require('../models/salarioModel');
const DespesaEquipe = require('../models/despesa_equipeModel');
const Maquinario = require('../models/maquinarioModel');
const Veiculo = require('../models/veiculoModel');
const Diverso = require('../models/diveroModel');

const obraController = {
  async getObraById(req, res) {
    const obra_id = req.params.id;
    const obra = await Obra.findObraById(obra_id);

    // Garantir que todos os valores numéricos sejam de fato números (ou 0)
    const totalSalario = Number(await Obra.getTotalSalarioByObraId(obra_id)) || 0;
    const totalDespesaEquipe = Number(await Obra.getTotalDespesaByObraId(obra_id)) || 0;
    const totalMaquinario = Number(await Obra.getTotalMaquinariosByObraId(obra_id)) || 0;
    const totalVeiculo = Number(await Obra.getTotalVeiculosByObraId(obra_id)) || 0;
    const totalDiverso = Number(await Obra.getTotalDiversosByObraId(obra_id)) || 0;
    const totalGastoObra = Number(await Obra.getTotalObraByObraId(obra_id)) || 0;
    const totalFaturamento = Number(await Obra.getTotalFaturamentoByObraId(obra_id)) || 0;

    console.log({
  totalSalario,
  totalDespesaEquipe,
  totalMaquinario,
  totalVeiculo,
  totalDiverso,
  totalGastoObra,
  totalFaturamento
});

    // Cálculo seguro do BDI
    const bdi = totalGastoObra !== 0 ? totalFaturamento / totalGastoObra : 0;

    const categorias = [
      { nome: 'Salários', valor: totalSalario },
      { nome: 'Despesa Equipe', valor: totalDespesaEquipe },
      { nome: 'Maquinários', valor: totalMaquinario },
      { nome: 'Veículos', valor: totalVeiculo },
      { nome: 'Diversos', valor: totalDiverso }
    ];

    // Calcular percentuais com segurança
    categorias.forEach(categoria => {
      categoria.percentual = totalGastoObra !== 0
        ? ((categoria.valor / totalGastoObra) * 100).toFixed(1)
        : '0.0';
    });

    console.log(obra);

    res.render('pages/obra', { 
      obra, 
      totalSalario, 
      totalDespesaEquipe, 
      totalMaquinario, 
      totalVeiculo, 
      totalDiverso, 
      totalGastoObra, 
      totalFaturamento,
      bdi,
      categorias
    });
  },

  async addNotaFiscal(req, res) {
    const { numero, valor, data_emissao, id_obra } = req.body;
    await Nota.createNF({ numero, valor, data_emissao, id_obra });
    res.redirect(`/obra/${id_obra}`);
  },

  async addDespesa(req, res) {
    const { tipo, valor, descricao, data, id_obra } = req.body;
    try {
      if (tipo === 'salario') {
        await Salario.createSalario({ nome: descricao, descricao, valor, obra_id: id_obra });
      } else if (tipo === 'despesa_equipe') {
        await DespesaEquipe.createDespesa_equipe({ descricao, valor, id_obra });
      } else if (tipo === 'maquinario') {
        await Maquinario.createMaquinario({ descricao, valor, id_obra });
      } else if (tipo === 'veiculos') {
        await Veiculo.createVeiculo({ descricao, valor, id_obra });
      } else if (tipo === 'diversos') {
        await Diverso.createDiverso({ descricao, valor, id_obra });
      }
      res.redirect(`/obra/${id_obra}`);
    } catch (err) {
      console.error('Erro ao adicionar despesa:', err);
      res.status(500).send('Erro ao adicionar despesa');
    }
  },
};

module.exports = obraController;
