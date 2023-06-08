const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()

// const jwt = require('jsonwebtoken');
// const secret = 'lkkfamhfvhgdghfsalkgadjnvkgjdhgglfd'

// // password encryption
// const { genSaltSync } = require('bcrypt');
// const bcrypt = require('bcrypt');
// const saltRounds = 10
// const salt = bcrypt.genSaltSync(saltRounds)


// DB CONNECTION!!!
const uri = "mongodb://0.0.0.0:27017/mern-blog-dawid";
const db = mongoose.connection
mongoose.connect(uri, {useNewUrlParser: true})
db.once('open', () => {
    console.log(`server is connected to ${uri} db`)
})
db.on('error', (err)=> {
    console.log(`connection; ${err}`)
})

// const User = require('./models/User');

app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(bodyParser.json())

const userRoutes = require('./routes/user.js')
app.use('/', userRoutes )

// app.post('/register', async (req, res)=>{
//     const {userName, password} = req.body
//     try{
//         const userDoc = await User.create({
//             userName, 
//             password: bcrypt.hashSync(password,salt)
//         })
//         res.json(userDoc)
//     } catch (e){
//         res.json(e)
//     }
// })

// app.post('/login', async (req, res)=>{
//     const {userName, password} = req.body
//     const userDoc = await User.findOne({userName})
//     const passOk = bcrypt.compareSync(password, userDoc.password)
//     if(passOk) {
//         //logged in
//         jwt.sign({userName, id:userDoc._id}, secret, {}, (err, token) =>{
//             if(err) throw err
//             res.cookie('token', token).json('ok')
//         })
//     }else{
//         res.json('wrong credentials')
//     }
// })

app.listen(4000, () => console.log('server running on port 4000'))
// mongodb+srv://salawuahmed17:atiparago17@cluster0.womo62e.mongodb.net/?retryWrites=true&w=majority