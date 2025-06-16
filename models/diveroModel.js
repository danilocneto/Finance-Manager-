const db = require('../config/db');

module.exports = {

    async findDiversosByObraId(obra_id) {
        const query = 'SELECT * FROM diverso WHERE id_obra = $1';
        return db.query(query, [obra_id]);
    },
    async createDiverso(data) {
        const query = 'INSERT INTO diverso (descricao, valor, id_obra) VALUES ($1, $2, $3) RETURNING *';
        const values = [data.descricao, data.valor, data.id_obra];
        return db.query(query, values);
    },

    async updateDiverso(data, id) {
        const query = 'UPDATE diverso SET descricao = $1, valor = $2 WHERE id = $3 RETURNING *';
        const values = [data.descricao, data.valor, id];
        return db.query(query, values);
    },

    async deleteDiverso(id) {
        const query = 'DELETE FROM diverso WHERE id = $1';
        return db.query(query, [id]);
    }
};
