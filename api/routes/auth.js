import express from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt'


const router = express.Router();

// register / create an user
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const newUser = new User(req.body)
        const user = await newUser.save()

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})


export default router;