const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    UID: {
        type: String,
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('post', PostSchema);

module.exports = Post 