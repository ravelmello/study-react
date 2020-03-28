const conn = require('../database/conn');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
    
        await conn('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        console.log(request.body);
        return response.json( { id });
    },

    async listAll (request,response){
        const {page = 1} = request.query;

        const ongs = await conn('ong')
        .limit(5)
        .offset((page - 1 )*5)
        .select('*');
        
        return response.json(ongs);


    }   
}
