const express = require('express');
const router = express.Router();
const { createGame,
     getGames, 
     updateGame,
      deleteGame, getGameById } = require('../controllers/gameController');

// Rotas de plantações
router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGameById);
router.put('/:id', updateGame); // Rota para atualizar plantação
router.delete('/:id', deleteGame); // Rota para deletar plantação

module.exports = router;
