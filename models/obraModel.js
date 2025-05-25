const db = require('../config/db');

module.exports = {
    async findAllObras(){
        console.log('Entrou no findAllObras');
        try {
            const result = await db.query('SELECT * FROM obra');
            return result.rows;
        } catch (err) {
            console.error('Erro no findAllObras:', err);
            throw err;
        }
    },

    async createObra(data){
        try {
            const query = 'INSERT INTO obra (nome, url_foto) VALUES ($1, $2)';
            const values = [data.nome, data.url_foto || null];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao criar obra:', err);
            throw err;
        }
    },

    async updateObra(id, data){
        try {
            const query = 'UPDATE obra SET nome = $1, url_foto = $2 WHERE id = $3';
            const values = [data.nome, data.url_foto, id];
            const result = await db.query(query, values);
            return result.rows[0];
        } catch (err) {
            console.error('Erro ao atualizar obra:', err);
            throw err;
        }
    },

    async deleteObra(id){
        try {
            const query = 'DELETE FROM obra WHERE id = $1';
            const result = await db.query(query, [id]);
            return result.rowCount > 0;
        } catch (err) {
            console.error('Erro ao deletar obra:', err);
            throw err;
        }
    }
};
