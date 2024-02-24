const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./Db/connect");
const Product = require("./model/model");
const jsonproducts = require("./products.json");
const port = process.env.PORT;
const connectionString ="mongodb+srv://akshayvm1836:Akshay123@cluster0.4pe1yf8.mongodb.net/?retryWrites=true&w=majority";


const start = async () => {
  try {
    await connectDb(connectionString);
    await Product.deleteMany();
    await Product.create(jsonproducts);
    app.listen(port, () => {
      console.log("app running on port");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
