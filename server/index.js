import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db/db.js'

import authRouter from './routes/auth.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
    
})