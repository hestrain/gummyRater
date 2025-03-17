// import mongoose from "mongoose";
// import 'dotenv/config'
// import MongoClient from 'mongodb'
const mongoose =require('mongoose')
require('dotenv').config() 
const { MongoClient } = require('mongodb');
async function listDatabases(client){

    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

};

const connectToMongoDB = async () => {
    try {
      
        await mongoose.connect(
            process.env.DB_URL,
        );
        console.log("Connected to MongoDB! Yay");

        //this new thingy

        async function main(){

            /**
        
             * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
        
             * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
        
             */
            
            const client = new MongoClient(process.env.DB_URL);
        
            try {
        
                // Connect to the MongoDB cluster
        
                await client.connect();
        
                // Make the appropriate DB calls
        
                await  listDatabases(client);
        
            } catch (e) {
        
                console.error(e);
        
            } finally {
        
                await client.close();
        
            }
        
        }
        
        main().catch(console.error);
        
    } catch (error) {
console.log("Error connecting to MongoDB", error.message)
    }
}

module.exports = connectToMongoDB