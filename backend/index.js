const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

//database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB database!");
  } catch (error) {}
};

//middlewars
dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Listening on Port " + process.env.PORT);
});
