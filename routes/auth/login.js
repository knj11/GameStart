const { getUser, getUserByEmail } = require("../../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    const validUser = await getUserByEmail(email);

    if (!validUser) {
      console.log("Not a valid User");
      throw {
        name: "InvalidUser",
        message: "User name / Email is not recognized.",
        status: 400,
      };
    }
    const validPassword = await getUser({ email, password });
    if (!validPassword) {
      throw {
        name: "InvalidPassword",
        message: "Invalid Password Error",
        status: 400,
      };
    }
    const token = jwt.sign({ id: validUser.id, email: validUser.email }, JWT_SECRET);

    res.send({
      user: { id: validUser.id, email: validUser.email },
      message: "you're logged in!",
      token,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = login;
