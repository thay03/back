const express = require('express');
const router = express.Router();
const { 
     getDirectors,
     updateDirector,
     deleteDirector,
     createDirector,
     getDirectorById
} = require('../controllers/directorController');

// Rotas de usuários
router.post('/', createDirector);
router.get('/', getDirectors);
router.get('/:id', getDirectorById);
router.put('/:id', updateDirector); // Rota para atualizar criador
router.delete('/:id', deleteDirector); // Rota para deletar criador

module.exports = router; // Exporta apenas as rotas
