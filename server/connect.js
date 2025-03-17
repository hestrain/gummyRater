// const { MongoClient, ServerApiVersion } = require("mongodb")
// const { collection } = require("./models/Gummy")
// const { connect } = require("mongoose")
// import 'dotenv/config' 
// const Db = process.env.DB_URL


// const client = new MongoClient(Db, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// })

// let database

// module.exports = {
//     connectToServer: () => {

//          database =  client.db("Ratings")
//     },
//     getDb: () => {
//         return database
//     }
// }