const express = require("express");
const LoginController = require('../../controllers/LoginController');


const logingRoutes = express.Router();


logingRoutes.post('/login', LoginController.create);


module.exports = logingRoutes;