const db = require('../config/db');

module.exports = {
    async findVeiculosByObraId(obra_id) {
        const query = 'SELECT * FROM veiculos WHERE id_obra = $1';
        return db.query(query, [obra_id]);
    },

    async createVeiculo(data) {
        const query = 'INSERT INTO veiculos (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *';
        const values = [data.descricao, data.valor, data.id_obra];
        return db.query(query, values);
    },

    async updateVeiculo(data, id) {
        const query = 'UPDATE veiculos SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *';
        const values = [data.descricao, data.valor, id];
        return db.query(query, values);
    },

    async deleteVeiculo(id) {
        const query = 'DELETE FROM veiculos WHERE id = $1';
        return db.query(query, [id]);
    }
};
