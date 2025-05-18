const aiService = require("../services/ai.services");
const Chat = require("../models/Chat");  // Add this

module.exports.getResponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await aiService(code);

        // Save to MongoDB
        const chat = new Chat({ prompt: code, response });
        await chat.save();

        res.send(response);
    } catch (error) {
        console.error("AI or DB error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
};
