const express = require("express");
const {celebrate, Joi, Segments} = require('celebrate');
const LoginController = require('../../controllers/LoginController');


const logingRoutes = express.Router();


logingRoutes.post('/login', celebrate({
    [Segments.BODY]: Joi.object({
        id: Joi.string().required().min(8).max(8)
    }).unknown()
}),LoginController.create);

                                           
module.exports = logingRoutes;