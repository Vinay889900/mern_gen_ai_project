const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    prompt: String,
    response: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Chat", ChatSchema);
