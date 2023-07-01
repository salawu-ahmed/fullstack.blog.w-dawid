const express = require('express')
const router = express.Router()

const secret = 'lkkfamhfvhgdghfsalkgadjnvkgjdhgglfd'
const jwt = require('jsonwebtoken');
// password encryption

const bcrypt = require('bcrypt');
// const { genSaltSync } = require('bcrypt');
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

const User = require('../models/User');

router.post('/login', async (req, res)=>{
    const {userName, password} = req.body
    const userDoc = await User.findOne({userName})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk) {
        //logged in
        jwt.sign({userName, id:userDoc._id}, secret, {}, (err, token) =>{
            if(err) throw err
            res.cookie('token', token).json({
                id:userDoc._id,
                userName
            })
        })
    }else{
        res.status(400).json('wrong credentials')
    }
})

router.post('/register', async (req, res)=>{
    // get the details of the /register route
    const {userName, password} = req.body 
    // verify the user input
    
    try{
        const userDoc = await User.create({
            userName, 
            password: bcrypt.hashSync(password,salt)
        })
        res.json(userDoc)
    } catch (e){
        res.json(e)
    }
})

router.get('/profile', (req, res) => {
    const {token} = req.cookie
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err
        res.json(info)
    })
})

router.post('/logout', (req, res) => {
    res.cookie('token', "").json('ok')
})

module.exports = router