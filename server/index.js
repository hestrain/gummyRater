import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import connectToMongoDB from './db/db.cjs'
import gummiesRoutes from './gummiesRoutes.cjs'

import authRouter from './routes/auth.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/gummies', gummiesRoutes)

const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
    
})

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
    async function listDatabases(db){

        databasesList = await db.db().admin().listDatabases();
    
        console.log("Databases:");
    
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
    };
    listDatabases
});

app.get('/', (req, res) => {
    res.send('Welcome to the Gummies API');
});