const db = require('../config/db');

module.exports = {

    async findAllNF() {
        try {
            const result = await db.query('SELECT * FROM nota_fiscal');
            return result.rows;
        } catch (error) {
            console.error('Erro ao buscar notas fiscais:', error);
            throw error;
        }
    },

    async createNF(data) {
        try {
            // Validação dos dados
            if (!data.id_obra) {
                throw new Error('ID da obra é obrigatório');
            }

            // Log dos dados antes da inserção
            console.log('Dados para inserção:', data);

            const query = 'INSERT INTO nota_fiscal (numero, valor, data_emissao, id_obra) VALUES ($1, $2, $3, $4) RETURNING *';
            const values = [data.numero, data.valor, data.data_emissao, data.id_obra];
            
            // Log da query e valores
            console.log('Query:', query);
            console.log('Valores:', values);

            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar nota fiscal:', error);
            throw error;
        }
    },

    async updateNF(id, data) {
        try {
            const query = 'UPDATE nota_fiscal SET numero = $1, valor = $2, data_emissao = $3 WHERE id = $4 RETURNING *';
            const values = [data.numero, data.valor, data.data_emissao, id];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar nota fiscal:', error);
            throw error;
        }
    },

    async deleteNF(id) {
        try {
            const query = 'DELETE FROM nota_fiscal WHERE id = $1 RETURNING *';
            const result = await db.query(query, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao deletar nota fiscal:', error);
            throw error;
        }
    },

    async findNotasByObraId(id_obra) {
        try {
            const result = await db.query('SELECT * FROM nota_fiscal WHERE id_obra = $1 ORDER BY data_emissao DESC', [id_obra]);
            return result.rows;
        } catch (error) {
            console.error('Erro ao buscar notas fiscais por obra:', error);
            throw error;
        }
    }

}

