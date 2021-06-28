const { Router } = require("express");
const signUp = require("./signUp");
const attachUser = require("./attachUser");
const login = require("./login");
const authRouter = Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);

module.exports = authRouter;
