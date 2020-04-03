const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
const IncidentController = require('../../controllers/IncidentController');
const ProfileController = require('../../controllers/ProfileController')

const incidentRoutes = express.Router();


incidentRoutes.post('/incident', 
celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        title: Joi.string().required().max(200),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), 
IncidentController.create);

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