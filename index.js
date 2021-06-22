// Web Server

const express = require("express");
const server = express();

// logging

const morgan = require("morgan");
server.use(morgan("dev"));

// handle application/json requests

server.use(express.json());

// API
server.use("/api", require("./routes"));

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
