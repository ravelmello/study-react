const express = require("express");
const {celebrate, Joi, Segments} = require('celebrate');
const LoginController = require('../../controllers/LoginController');


const logingRoutes = express.Router();


logingRoutes.post('/login', celebrate({
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required()
    }).unknown()
}),LoginController.create);


module.exports = logingRoutes;