const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({
        evento: "Semana Omnistack",
        usuario: {
            nome: "Ravel da Costa Melo",
            profissao: "Analista de Sistemas"
        }
    })
});

app.listen(3333);

