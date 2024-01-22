// this will be entry point  to my Express application
const express = require("express");
const app = express();
const port = process.env.Port || 3000;
// a MongoDB object modeling tool for Node.js - Mongoose
const mongoose = require("mongoose");

const mongoDBUri =
  "mongodb+srv://ankita23:myDB@cluster0.ttzjb.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
