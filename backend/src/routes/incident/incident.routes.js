const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const IncidentController = require('../../controllers/IncidentController');
const ProfileController = require('../../controllers/ProfileController')

const incidentRoutes = express.Router();


//TODO criar validação de rota de criação
incidentRoutes.post('/incident', IncidentController.create);

incidentRoutes.get('/incident', celebrate({
    [Segments.QUERY] : Joi.object().keys({
        page: Joi.number()
    })
}),IncidentController.listAll);
incidentRoutes.delete('/incident/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}),IncidentController.delete);

incidentRoutes.get('/incident/ong/', ProfileController.listIncidentByOng)

module.exports = incidentRoutes;