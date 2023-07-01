const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express()

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

// middleware
app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(bodyParser.json())
app.use(cookieParser())

const userRoutes = require('./routes/user.js');
app.use('/', userRoutes )

app.listen(4000, () => console.log('server running on port 4000'))