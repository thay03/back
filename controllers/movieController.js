const Movie= require('../models/movie');

// Criar novo 
exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos 
exports.getMovies = async (req, res) => {
    try {
        const movies = await Game.find().populate('diretor', 'nome nacionalidade');
        res.status(200).json(movies);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('diretor', 'nome nacionalidade');
        if (!movie) {
            return res.status(404).json({ message: ' Fillme não encontrada' });
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar 
exports.updateMovie = async (req, res) => {
    try {

        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGame) return res.status(404).json({ message: 'Filme não encontrada' });

        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir jogo
exports.deleteMovie = async (req, res) => {
    try {
        const movie= await Movie.findByIdAndDelete(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Filme não encontrada' });

        res.status(200).json({ message: 'Filme excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
