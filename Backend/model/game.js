const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
