const db = require('../config/db');

module.exports = {

    async findAllNF() {
    const result = await db.query('SELECT * FROM nota_fiscal');
    return result.rows;
    },

    async createNF(data){
        const query = 'INSERT INTO nota_fiscal (numero, valor, data_emissao, id_obra) VALUES ($1, $2, $3, $4)';
        const values = [data.numero, data.valor, data.data_emissao, data.id_obra];
        return db.query(query, values);
    },

    async updateNF(data, id){
        const query = 'UPDATE nota_fiscal SET numero = $1, valor = $2, date = $3 WHERE id = $4';
        const values = [data.numero, data.valor, data.date, id];
        return db.query(query, values);

    },

    async deleteNF(id){
        const query = 'DELETE FROM nota_fiscal WHERE id = $1';
        return db.query(query, [id]);
    }

}

