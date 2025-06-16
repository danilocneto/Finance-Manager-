const Salario = require('../models/salarioModel');
const DespesaEquipe = require('../models/despesa_equipeModel');
const Maquinario = require('../models/maquinarioModel');
const Veiculo = require('../models/veiculoModel');
const Diverso = require('../models/diveroModel');

const despesasController = {
  // GETS por obra
  async getSalariosByObraId(req, res) {
    const obra_id = req.params.id;
    try {
      let despesasResult = await Salario.findSalariosByObraId(obra_id);
      let despesas = despesasResult.rows;
      despesas = despesas.map(item => ({ ...item, valor: Number(item.valor) }));
      if (despesas && despesas.length && despesas[0].data) {
        despesas = despesas.sort((a, b) => new Date(b.data) - new Date(a.data));
      }
      res.render('pages/despesa', {
        titulo: 'Salários',
        descricao: 'Lista de salários da obra',
        despesas,
        tipo: 'salarios',
        obra_id
      });
    } catch (error) {
      console.error('Erro ao buscar salários:', error);
      res.status(500).json({ error: 'Erro ao buscar salários' });
    }
  },

  async getDespesaEquipeByObraId(req, res) {
    const obra_id = req.params.id;
    try {
      let despesasResult = await DespesaEquipe.findDespesasByObraId(obra_id);
      let despesas = despesasResult.rows;
      despesas = despesas.map(item => ({ ...item, valor: Number(item.valor) }));
      if (despesas && despesas.length && despesas[0].data) {
        despesas = despesas.sort((a, b) => new Date(b.data) - new Date(a.data));
      }
      res.render('pages/despesa', {
        titulo: 'Despesas da Equipe',
        descricao: 'Lista de despesas da equipe',
        despesas,
        tipo: 'despesa_equipe',
        obra_id
      });
    } catch (error) {
      console.error('Erro ao buscar despesas da equipe:', error);
      res.status(500).json({ error: 'Erro ao buscar despesas da equipe' });
    }
  },

  async getMaquinariosByObraId(req, res) {
    const obra_id = req.params.id;
    try {
      let despesasResult = await Maquinario.findMaquinariosByObraId(obra_id);
      let despesas = despesasResult.rows;
      despesas = despesas.map(item => ({ ...item, valor: Number(item.valor) }));
      if (despesas && despesas.length && despesas[0].data) {
        despesas = despesas.sort((a, b) => new Date(b.data) - new Date(a.data));
      }
      res.render('pages/despesa', {
        titulo: 'Maquinários',
        descricao: 'Lista de maquinários da obra',
        despesas,
        tipo: 'maquinarios',
        obra_id
      });
    } catch (error) {
      console.error('Erro ao buscar maquinários:', error);
      res.status(500).json({ error: 'Erro ao buscar maquinários' });
    }
  },

  async getVeiculosByObraId(req, res) {
    const obra_id = req.params.id;
    try {
      let despesasResult = await Veiculo.findVeiculosByObraId(obra_id);
      let despesas = despesasResult.rows;
      despesas = despesas.map(item => ({ ...item, valor: Number(item.valor) }));
      if (despesas && despesas.length && despesas[0].data) {
        despesas = despesas.sort((a, b) => new Date(b.data) - new Date(a.data));
      }
      res.render('pages/despesa', {
        titulo: 'Veículos',
        descricao: 'Lista de veículos da obra',
        despesas,
        tipo: 'veiculos',
        obra_id
      });
    } catch (error) {
      console.error('Erro ao buscar veículos:', error);
      res.status(500).json({ error: 'Erro ao buscar veículos' });
    }
  },

  async getDiversosByObraId(req, res) {
    const obra_id = req.params.id;
    try {
      let despesasResult = await Diverso.findDiversosByObraId(obra_id);
      let despesas = despesasResult.rows;
      despesas = despesas.map(item => ({ ...item, valor: Number(item.valor) }));
      if (despesas && despesas.length && despesas[0].data) {
        despesas = despesas.sort((a, b) => new Date(b.data) - new Date(a.data));
      }
      res.render('pages/despesa', {
        titulo: 'Diversos',
        descricao: 'Lista de despesas diversas da obra',
        despesas,
        tipo: 'diversos',
        obra_id
      });
    } catch (error) {
      console.error('Erro ao buscar despesas diversas:', error);
      res.status(500).json({ error: 'Erro ao buscar despesas diversas' });
    }
  },

  // ===== DELETES por ID de despesa =====
  async deleteSalario(req, res) {
    const { id } = req.params;
    try {
      await Salario.deleteSalario(id);
      res.redirect('back');
    } catch (error) {
      console.error('Erro ao deletar salário:', error);
      res.status(500).json({ error: 'Erro ao deletar salário' });
    }
  },

  async deleteDespesaEquipe(req, res) {
    const { id } = req.params;
    try {
      await DespesaEquipe.deleteDespesa_equipe(id);
      res.redirect('back');
    } catch (error) {
      console.error('Erro ao deletar despesa da equipe:', error);
      res.status(500).json({ error: 'Erro ao deletar despesa da equipe' });
    }
  },

  async deleteMaquinario(req, res) {
    const { id } = req.params;
    try {
      await Maquinario.deleteMaquinario(id);
      res.redirect('back');
    } catch (error) {
      console.error('Erro ao deletar maquinário:', error);
      res.status(500).json({ error: 'Erro ao deletar maquinário' });
    }
  },

  async deleteVeiculo(req, res) {
    const { id } = req.params;
    try {
      await Veiculo.deleteVeiculo(id);
      res.redirect('back');
    } catch (error) {
      console.error('Erro ao deletar veículo:', error);
      res.status(500).json({ error: 'Erro ao deletar veículo' });
    }
  },

  async deleteDiverso(req, res) {
    const { id } = req.params;
    try {
      await Diverso.deleteDiverso(id);
      res.redirect('back');
    } catch (error) {
      console.error('Erro ao deletar despesa diversa:', error);
      res.status(500).json({ error: 'Erro ao deletar despesa diversa' });
    }
  },

  // ===== UPDATES por ID de despesa =====
  async updateSalario(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Salario.updateSalario(data, id);
      res.redirect(`/despesas/salarios/${data.obra_id}`);
    } catch (error) {
      console.error('Erro ao atualizar salário:', error);
      res.status(500).json({ error: 'Erro ao atualizar salário' });
    }
  },

  async updateDespesaEquipe(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await DespesaEquipe.updateDespesa_equipe(data, id);
      res.redirect(`/despesas/despesa_equipe/${data.obra_id}`);
    } catch (error) {
      console.error('Erro ao atualizar despesa da equipe:', error);
      res.status(500).json({ error: 'Erro ao atualizar despesa da equipe' });
    }
  },

  async updateMaquinario(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Maquinario.updateMaquinario(data, id);
      res.redirect(`/despesas/maquinarios/${data.obra_id}`);
    } catch (error) {
      console.error('Erro ao atualizar maquinário:', error);
      res.status(500).json({ error: 'Erro ao atualizar maquinário' });
    }
  },

  async updateVeiculo(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Veiculo.updateVeiculo(data, id);
      res.redirect(`/despesas/veiculos/${data.obra_id}`);
    } catch (error) {
      console.error('Erro ao atualizar veículo:', error);
      res.status(500).json({ error: 'Erro ao atualizar veículo' });
    }
  },

  async updateDiverso(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Diverso.updateDiverso(data, id);
      res.redirect(`/despesas/diversos/${data.obra_id}`);
    } catch (error) {
      console.error('Erro ao atualizar despesa diversa:', error);
      res.status(500).json({ error: 'Erro ao atualizar despesa diversa' });
    }
  }
};

module.exports = despesasController;
