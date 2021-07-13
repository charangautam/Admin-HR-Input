import express from 'express';
import Post from '../models/Post';


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

export default router