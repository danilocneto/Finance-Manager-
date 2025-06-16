const db = require('../config/db');

module.exports = {
    async findSalariosByObraId(obra_id) {
        const query = 'SELECT * FROM salario WHERE id_obra = $1';
        return db.query(query, [obra_id]);
    },

    async createSalario(data){
        const query = 'INSERT INTO salario (descricao, valor, id_obra) VALUES ($1, $2, $3)';
        const values = [data.descricao, data.valor, data.id_obra];
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