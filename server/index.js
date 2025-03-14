const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
import authRouter from './routes/auth'
const UserModel = require('./models/Users')
const GummyModel = require('./models/Gummy')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)


mongoose.connect("mongodb://0.0.0.0:0")

app.get('/getUsers', (req,res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get('/api/gummies', (req,res) => {
    GummyModel.find()
    .then(users => res.json(gummy))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is running");
    
})