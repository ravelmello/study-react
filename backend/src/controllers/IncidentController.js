const conn = require('../database/conn');

module.exports = {
    async create(request, respose) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

       const [id] = await conn('incident').insert({
            title,
            description,
            value,
            ong_id
        });

        return respose.json({ id });
    },

    async listAll(request, response) {
        const { page = 1 } = request.query; 

        const [count] = await conn('incident').count();

        response.header('X-Total-Count', count['count(*)']);

        const incidents = await conn('incident')
        .join('ong', 'ong.id', '=', 'incident.ong_id')
        .limit(5)
        .offset((page-1)*5)
        .select(['incident.*', 
        'ong.name',
        'ong.email',
        'ong.whatsapp',
        'ong.city',
        'ong.uf']);
        return response.json(incidents);
    },  

    async delete(request, response){
        const { id } = request.params;
        const ong_id  = request.headers.authorization;

        console.log(ong_id);

        const incidentToDelete = await conn('incident')   
        .where('id', id)
        .select('ong_id')
        .first();
        
        console.log(incidentToDelete);
        
        if (incidentToDelete === undefined) {
            return response.status(404).json({ error: 'ONG NÃO ENCONTRADA' });
        } else if(incidentToDelete.ong_id != ong_id ){
            return response.status(401).json({ error : 'ONG NÃO POSSUI PERMISSÃO PARA DELETAR'});    
        }

        await conn('incident')
        .where('id', id)
        .delete();

        return response.status(204).send();
    }
}