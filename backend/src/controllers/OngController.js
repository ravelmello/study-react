const conn = require('../database/conn');
const generateUniqueID = require('../utils/generateID');

module.exports = {
    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        const id = generateUniqueID();
    
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
       // const {page = 1} = request.query;

        const ongs = await conn('ong')
        .limit(5)
        .offset((page - 1 )*5)
        .select('*');
        
        return response.json(ongs);


    }   
}
