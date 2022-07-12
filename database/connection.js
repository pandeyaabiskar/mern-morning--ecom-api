const mongoose = require("mongoose");

//Database connection
const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecom");
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error occured");
  }
};

module.exports = connectDatabase;
