const express = require('express');
const IncidentController = require('../../controllers/IncidentController');
const ProfileController = require('../../controllers/ProfileController')

const incidentRoutes = express.Router();


incidentRoutes.post('/incident', IncidentController.create);
incidentRoutes.get('/incident', IncidentController.listAll);
incidentRoutes.delete('/incident/:id', IncidentController.delete);
incidentRoutes.get('/incident/ong/', ProfileController.listIncidentByOng)

module.exports = incidentRoutes;