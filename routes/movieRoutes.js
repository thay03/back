const express = require('express');
const router = express.Router();
const { createMovie, 
       getMovies, 
       getMovieById, 
       updateMovie,
        deleteMovie } = require('../controllers/movieController');

// Rotas de jogos
router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie); // Rota para atualizar jogos
router.delete('/:id', deleteMovie); // Rota para deletar jogos

module.exports = router;
