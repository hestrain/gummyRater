const express = require('express')
const Gummies = require('./models/Gummy.cjs')
const mongoose = require('mongoose')

const gummiesRouter = express.Router()

const db = mongoose.connection;

gummiesRouter.get('/gummies', async (req, res) => {
  // const gummies = await Gummies.find()
  // res.json(gummies)
  let db = database.getDb();
  let data = await db.collection("gummies").find({}).toArray();
  if (data.length > 0) {
    res.json(data);
  } else {
    throw new Error("Data was not found");
  }
})

module.exports = gummiesRouter;


// const db = mongoose.connection;

// const ObjectId = require("mongodb").ObjectId;

// let gummiesRoutes = express.Router();

// //get all
// gummiesRoutes.route("/gummies").get(async (req, res) => {
//   let db = database.getDb();
//   let data = await db.collection("gummies").find({}).toArray();
//   if (data.length > 0) {
//     res.json(data);
//   } else {
//     throw new Error("Data was not found");
//   }
// });

// //get 1
// gummiesRoutes.route("/gummies/:id").get(async (req, res) => {
//   let db = database.getDb();
//   let data = await db
//     .collection("gummies")
//     .findOne({ _id: new ObjectId(req.params.id)})
//   if (Object.keys(data).length > 0) {
//     res.json(data);
//   } else {
//     throw new Error("User was not found");
//   }
// });
// //create
// gummiesRoutes.route("/gummies/").post(async (req, res) => {
//   let db = database.getDb();
//   let mongoObject = {
//     brand: req.body.brand,
//     title: req.body.title,
//     notes: req.body.notes,
//     felt: req.body.felt,
//     rating: req.body.rating,
//     horn: req.body.horn,
//     munchie: req.body.munchie,
//     munchNotes: req.body.munchNotes,
//     morningAfter: req.body.morningAfter,
//     weeknight: req.body.weeknight,
//     cbd: req.body.cbd,
//     thc: req.body.thc,
//     dateCreated: req.body.dateCreated
//   };
//   let data = await db.collection("gummies").insertOne(mongoObject);
//   res.json(data);
// });

// //update
// gummiesRoutes.route("/gummies/:id").post(async (req, res) => {
//   let db = database.getDb();
//   let mongoObject = {
//     $set: {
//       brand: req.body.brand,
//       title: req.body.title,
//       notes: req.body.notes,
//       felt: req.body.felt,
//       rating: req.body.rating,
//       horn: req.body.horn,
//       munchie: req.body.munchie,
//       munchNotes: req.body.munchNotes,
//       morningAfter: req.body.morningAfter,
//       weeknight: req.body.weeknight,
//       cbd: req.body.cbd,
//       thc: req.body.thc,
//     },
//   };
//   let data = await db
//     .collection("gummies")
//     .updateOne({ _id: new ObjectId(req, params.id) }, mongoObject);
//   res.json(data);
// });

// //delete
// gummiesRoutes.route("/gummies/:id").delete(async (req, res) => {
//   let db = database.getDb();
//   let data = await db
//     .collection("gummies")
//     .deleteOne({ _id: new ObjectId(req.params.id) })
//     res.json(data);
// });


// module.exports = gummiesRoutes