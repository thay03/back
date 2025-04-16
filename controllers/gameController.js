const Game = require('../models/game');

// Criar novo jogo
exports.createGame = async (req, res) => {
    try {
        const { name, description, responsible } = req.body;
        const game = new Game({ name, description, responsible });
        await game.save();
        res.status(201).json(game);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar todos od jogos
exports.getGames = async (req, res) => {
    try {
        const games = await Game.find().populate('responsible', 'name');
        res.status(200).json(games);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id).populate('responsible', 'name');
        if (!game) {
            return res.status(404).json({ message: 'Plantação não encontrada' });
        }
        res.status(200).json(game);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar jogo
exports.updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, responsible } = req.body;

        const updatedGame = await Game.findByIdAndUpdate(id, { name, description, responsible }, { new: true });
        if (!updatedGame) return res.status(404).json({ message: 'Plantação não encontrada' });

        res.status(200).json(updatedGame);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Excluir jogo
exports.deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGame = await Game.findByIdAndDelete(id);
        if (!deletedGame) return res.status(404).json({ message: 'Plantação não encontrada' });

        res.status(200).json({ message: 'Plantação excluída com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
