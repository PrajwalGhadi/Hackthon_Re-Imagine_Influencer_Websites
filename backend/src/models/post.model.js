const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String, // Stores the raw HTML string
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);