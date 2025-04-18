const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   titulo:{type:String, required: true},
   genero:{type: String, required: true},
   diretor: {type:  mongoose.Schema.Types.ObjectId, ref: 'Director', require: true}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
