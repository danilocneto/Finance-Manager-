const db = require('../config/db');

module.exports = {
    async createMaquinario(data) {
        const query = 'INSERT INTO maquinario_equipamento (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *';
        const values = [data.descricao, data.valor, data.id_obra];
        return db.query(query, values);
    },

    async updateMaquinario(data, id) {
        const query = 'UPDATE maquinario_equipamento SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *';
        const values = [data.descricao, data.valor, id];
        return db.query(query, values);
    },

    async deleteMaquinario(id) {
        const query = 'DELETE FROM maquinario_equipamento WHERE id = $1';
        return db.query(query, [id]);
    }
};
