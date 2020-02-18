const express = require('express');
const routes = express.Router();

const donorsController = require('./Controllers/donorsController');

routes.get('/', donorsController.index);
routes.post('/', donorsController.store);
routes.put('/:id', donorsController.update);
routes.delete('/:id', donorsController.destroy);

module.exports = routes;