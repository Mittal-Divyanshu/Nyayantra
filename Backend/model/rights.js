const mongoose = require('mongoose');

// Define the Rights Schema
const rightSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    details: [
        {
            articleTitle: { type: String, required: true },
            articleDescription: { type: String, required: true }
        }
    ]
});

// Create the model
const Rights = mongoose.model('Rights', rightSchema);

module.exports = Rights;