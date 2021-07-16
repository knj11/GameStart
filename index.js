// Web Server

const express = require("express");
const server = express();

require('dotenv').config()

// logging

const morgan = require("morgan");
server.use(morgan("dev"));

// handle application/json requests

server.use(express.json());

// API
server.use(express.static('build'))
server.use("/api", require("./routes"));

//Error Handling
server.use((error, _req, res, _next) => {
  console.log("Sending Error Message")
  console.log("Error", error)
  res.status(error.status)
  res.send(error)
});

// DB connection
const { client } = require("./db");

// connect to server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});
