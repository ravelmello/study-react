const express = require("express");
const routes = express.Router();

const ongRouter = require('./ong/ong.routes')
const incidentRouter = require('./incident/incident.routes')
const loginRouter = require('./login/login.routes');

routes.use(ongRouter);
routes.use(incidentRouter);
routes.use(loginRouter);

routes.get('/user',(request,response)=>{
    return response.json({
        evento: "Semana Omnistack",
        usuario: {
            nome: "Ravel da Costa Melo",
            profissao: "Analista de Sistemas"
        }
    })
});


routes.post('/user', (request, response)=>{
    const body = request.body;
    console.log(body);
    
    return response.json({
        user: {
            name: body.name,
            age: body.age
        }
    })
});

module.exports = routes;