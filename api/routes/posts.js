const express = require('express')
const Post = require('../models/Post')

const router = express.Router();

// create a post
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const post = await newPost.save()

        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get posts
router.get('/:userId', async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId })
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

// delete a post 
router.delete('/:postId', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.postId)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router