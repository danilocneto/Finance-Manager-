const db = require('../config/db');

module.exports = {
    async createSalario(data){
        const query = 'INSERT INTO salario (nome, descricao, valor, obra_id) VALUES ($1, $2, $3, $4)';
        const values = [data.nome, data.descricao, data.valor, data.obra_id];
        return db.query(query, values);
    },

    async  updateSalario(data, id){
        const query = 'UPDATE salario SET nome = $1, descricao = $2, valor = $3 WHERE id = $4';
        const values = [data.nome, data.descricao, data.valor, id];
        return db.query(query, values);
    },
    
    async deleteSalario(id){
        const query = 'DELETE FROM salario WHERE id = $1';
        return db.query(query, [id]);
    }
}