const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://akshayvm1836:Akshay123@cluster0.4pe1yf8.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async () => {
  mongoose
    .connect(connectionString)
    console.log('connected')
};

module.exports=connectDb;
