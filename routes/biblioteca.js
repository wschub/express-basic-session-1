const {  Router, query } = require('express');
const path = require('path');
const router = Router();
const service_autor = require('../services/biblioteca/autor')

router.get('/autores', service_autor.obtenerAutores)
router.get('/autor/:codigo_autor', service_autor.obtenerAutor)
router.post('/autor', service_autor.insertarAutor)
router.delete('/autor/:codigo_autor', service_autor.eliminarAutor)
module.exports = router
	