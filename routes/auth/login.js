const { getUser } = require("../../db");
const jwt = require("jsonwebtoken");
const { getUserByUserName } = require("../../db");
async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    const validUser = await getUserByUserName(username);

    if (!validUser) {
      next({
        name: "InvalidUser",
        message: "User name is not recognized.",
        status: 400,
      });
    }
    const validPassword = await getUser({ username, password });
    if (!validPassword) {
      next({
        name: "InvalidPassword",
        message: "Ivalid Password Error",
        status: 400,
      });
    }
    const token = jwt.sign(
      { id: validUser.id, username: validUser.username },
      process.env.JWT_SECRET
    );

    res.send({
      user: { id: validUser.id, username: validUser.username },
      message: "you're logged in!",
      token,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = login;
