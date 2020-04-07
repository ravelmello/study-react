const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');
const phoneValidator = require('joi-phone-validator');

const OngController = require('../../controllers/OngController');

const ongRoute = express.Router();


ongRoute.get('/ong', OngController.listAll);

ongRoute.post('/ong', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number(), //TODO alterar validação de numero de telefone
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) ,OngController.create);


module.exports = ongRoute;
