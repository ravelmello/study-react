const express = require('express');
const OngController = require('../../controllers/OngController')

const ongRoute = express.Router();


ongRoute.get('/ong', OngController.listAll);
ongRoute.post('/ong', OngController.create);


module.exports = ongRoute;
