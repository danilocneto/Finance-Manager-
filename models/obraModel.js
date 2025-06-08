const db = require('../config/db');

module.exports = {
  async findAllObras() {
    try {
      const result = await db.query('SELECT * FROM obra');
      return result.rows;
    } catch (err) {
      console.error('Erro no findAllObras:', err);
      throw err;
    }
  },

  async findObraById(id) {
    try {
      const query = 'SELECT * FROM obra WHERE id = $1';
      const result = await db.query(query, [id]);
      if (result.rows.length === 0) {
        throw new Error('Obra não encontrada');
      }
      return result.rows[0];
    } catch (err) {
      console.error('Erro ao buscar obra por ID:', err);
      throw err;
    }
  },

  async createObra(data) {
    try {
      const query = 'INSERT INTO obra (nome, url_foto) VALUES ($1, $2) RETURNING *';
      const values = [data.nome, data.url_foto || null];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Erro ao criar obra:', err);
      throw err;
    }
  },

  async updateObra(id, data) {
    try {
      const query = 'UPDATE obra SET nome = $1, url_foto = $2 WHERE id = $3 RETURNING *';
      const values = [data.nome, data.url_foto, id];
      const result = await db.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error('Erro ao atualizar obra:', err);
      throw err;
    }
  },

  async deleteObra(id) {
    try {
      const query = 'DELETE FROM obra WHERE id = $1';
      const result = await db.query(query, [id]);
      return result.rowCount > 0;
    } catch (err) {
      console.error('Erro ao deletar obra:', err);
      throw err;
    }
  },

  async getTotalSalarioByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(salario.valor), 0) AS total_salario
        FROM salario
        WHERE salario.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_salario);
    } catch (err) {
      console.error('Erro ao obter total salário por obra:', err);
      throw err;
    }
  },

  async getTotalDespesaByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(despesa_equipe.valor), 0) AS total_despesa
        FROM despesa_equipe
        WHERE despesa_equipe.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_despesa);
    } catch (err) {
      console.error('Erro ao obter total despesa equipe por obra:', err);
      throw err;
    }
  },

  async getTotalVeiculosByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(veiculos.valor), 0) AS total_veiculos
        FROM veiculos
        WHERE veiculos.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_veiculos);
    } catch (err) {
      console.error('Erro ao obter total veículos por obra:', err);
      throw err;
    }
  },

  async getTotalMaquinariosByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(maquinario_equipamento.valor), 0) AS total_maquinario
        FROM maquinario_equipamento
        WHERE maquinario_equipamento.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_maquinario);
    } catch (err) {
      console.error('Erro ao obter total maquinário por obra:', err);
      throw err;
    }
  },

  async getTotalDiversosByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(diverso.valor), 0) AS total_diverso
        FROM diverso
        WHERE diverso.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_diverso);
    } catch (err) {
      console.error('Erro ao obter total diversos por obra:', err);
      throw err;
    }
  },

  async getTotalObraByObraId(id) {
    try {
      const salario = await this.getTotalSalarioByObraId(id);
      const despesa = await this.getTotalDespesaByObraId(id);
      const veiculos = await this.getTotalVeiculosByObraId(id);
      const equipamentos = await this.getTotalMaquinariosByObraId(id);
      const diversos = await this.getTotalDiversosByObraId(id);

      const totalGeral = salario + despesa + veiculos + equipamentos + diversos;

      return totalGeral;
    } catch (err) {
      console.error('Erro ao obter total geral da obra:', err);
      throw err;
    }
  },

  async getTotalFaturamentoByObraId(id) {
    try {
      const query = `
        SELECT COALESCE(SUM(nota_fiscal.valor), 0) AS total_faturamento
        FROM nota_fiscal
        WHERE nota_fiscal.id_obra = $1
      `;
      const result = await db.query(query, [id]);
      return Number(result.rows[0].total_faturamento);
    } catch (err) {
      console.error('Erro ao obter total faturamento por obra:', err);
      throw err;
    }
  }
};
