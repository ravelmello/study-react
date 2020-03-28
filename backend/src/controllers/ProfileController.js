const conn = require('../database/conn');

module.exports = {
    async listIncidentByOng(request, response){
        
        const { page = 1 } = request.query;
        const ong_id  = request.headers.authorization; //id do login da ong

        console.log(ong_id);
            
       const incidentsByOng = await conn('incident')
        .where('ong_id', ong_id)
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        console.log(incidentsByOng);

        if(incidentsByOng.length == 0){
            console.log("Dentro do validador");
            return response.status(204).send("Nenhum incidente encontrado para sua ONG");
        } 

        return response.json(incidentsByOng);
    }
}