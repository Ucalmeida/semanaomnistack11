/**
 * Crypto é para criptografia, mas através dele usamos um método para gerar
 * uma string aleatória, um texto aleatório, vários caracteres juntos
 */
const crypto = require('crypto');
const connection = require('../database/connection');

/**
 * Para cadastrar os dados nas tabelas criadas, mantém .post
 * E muda '/users' para '/ongs'(Nome da tabela que deseja inserir os dados)
 * Async e await serve para o código aguardar a inserção finalizar, para só depois ir
 * para return response.json();
 */
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};