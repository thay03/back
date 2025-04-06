const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    responsible: { type: mongoose.Schema.Types.ObjectId, ref:'Creator', required: true }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
