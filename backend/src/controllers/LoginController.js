const conn = require('../database/conn');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await conn('ong')
        .where('id', id)
        .select({
            name:'name',
            email:'email',
            whatsapp: 'whatsapp'
        })
        .first();

        if(!ong) {
            return response.status(400).json({ error: "Não foi encontrada a ONG com o ID fornecido"})
        }

        return response.json(ong);
    }
}