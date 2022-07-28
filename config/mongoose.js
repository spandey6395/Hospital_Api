const mongoose = require("mongoose");

// connect to mongodb
mongoose.connect("mongodb+srv://spandey6395:R43s8If0R4EpfraA@cluster0.mknlo.mongodb.net/Saurabh5678");

//get the connection
const db = mongoose.connection;

// on error show error message on console
db.on(
  "error",
  console.error.bind(console, "Error connecting to the database :: MongoDB")
);

// on successful connection show successful message
db.once("open", () =>
  console.log("Successfully connected to the db :: MongoDB")
);

module.exports = db;
