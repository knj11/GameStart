const { Router } = require("express");
const signUp = require("./signUp");
const login = require("./login");
const { getAllUsers } = require("../../db")
const authRouter = Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);

authRouter.get('/', async (req, res, next) => {
  try {
    if (!req.user) throw "User obj is not attached to req"
    if (req.user.roleId !== 1) throw "user is not an administrator"
    const allUsers = await getAllUsers()

    res.send(allUsers)

  } catch (error) {
    next(error)
  }

})

module.exports = authRouter;
