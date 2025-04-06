const express = require('express');
const router = express.Router();
const { createCreator, 
    getCreator, 
    login, 
    updateCreator, 
    deleteCreator,
     getCreatorById } = require('../controllers/creatorController');

// Rotas de usuários
router.post('/', createCreator);
router.get('/', getCreator);
router.get('/:id', getCreatorById);
router.post('/login', login);
router.put('/:id', updateCreator); // Rota para atualizar criador
router.delete('/:id', deleteCreator); // Rota para deletar criador

module.exports = router;
