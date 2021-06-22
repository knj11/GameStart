const express = require("express");
const apiRouter = express.Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

module.exports = apiRouter;
