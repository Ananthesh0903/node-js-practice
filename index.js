const express = require('express');
const mongoose = require('mongoose');
const detailRoute = require('./routes/details.route');
const dotenv = require('dotenv');
dotenv.config();  

//Middleware
const app = express();
app.use(express.json());

//Routes
app.use('/api/details',detailRoute);

//Operations
app.listen(3000, () => {
    console.log(`Server is runningggggg singgggggggg winggggggggg on the port 3000`);
  })


mongoose.connect(process.env.MANGO_CONNECTION_STRING)
   .then(() =>{
    console.log("Connected Sucessfully");
  })
  .catch((err) => {
    console.log("Not Connected",err);
  })