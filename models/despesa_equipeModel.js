const db = require('../config/db');

module.exports = {

    async findDespesasByObraId(obra_id) {
        const query = 'SELECT * FROM despesa_equipe WHERE id_obra = $1';
        return db.query(query, [obra_id]);
    },

    async createDespesa_equipe(data) {
        const query = 'INSERT INTO despesa_equipe (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *';
        const values = [data.descricao, data.valor, data.id_obra];
        return db.query(query, values);
    },

    async updateDespesa_equipe(data, id) {
        const query = 'UPDATE despesa_equipe SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *';
        const values = [data.descricao, data.valor, id];
        return db.query(query, values);
    },

    async deleteDespesa_equipe(id) {
        const query = 'DELETE FROM despesa_equipe WHERE id = $1';
        return db.query(query, [id]);
    }
};
