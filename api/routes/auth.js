const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const router = express.Router();

// register / create an user
router.post('/register', async (req, res) => {
    try {
        const checkUser = await User.findOne({username: req.body.username})

        if(checkUser) {
            res.status(200).json("User already exists")
            return
        }

        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const newUser = new User(req.body)
        const user = await newUser.save()

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

// login with a registered user
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if(!user) {
            res.status(400).json('An user with this username does not exist')
            return
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)      
        if(!validPassword) {
            res.status(400).json('Incorrect password')
            return
        }

        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;