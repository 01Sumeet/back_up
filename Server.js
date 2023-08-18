// here we create our server
// const express = require("express");
import express from "express"
import bodyParser from "body-parser"
import db from './models/index.js';

import cors from "cors";

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};



// ?Express is for building the Rest apis
// body-parser helps to parse the request and create the req.body object
// cors provides Express middleware to enable CORS with various options.


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (request, response) => {
    response.json({ message: "Welcome to the Node js" });
});

// set port to listen for the request
const PORT = process.env.PORT || 8080; // Corrected line
app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
    db.mongoose.connect("mongodb://localhost:27017/sumitfirst_db").then((connection) => {
    console.log("db urlvsjfbnlbsbjsf");
    console.log("Connection established");
}).catch((error) => {
    console.log("Connection error", error);
    process.exit();
})

});

console.log("db url====>",db.url);
