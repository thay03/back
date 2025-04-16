const express = require('express');
const router = express.Router();
const { createGame,
      getGames, 
      updateGame,
      deleteGame,
       getGameById } = require('../controllers/gameController');

// Rotas de jogos
router.post('/', createGame);
router.get('/', getGames);
router.get('/:id', getGameById);
router.put('/:id', updateGame); // Rota para atualizar jogos
router.delete('/:id', deleteGame); // Rota para deletar jogos

module.exports = router;
