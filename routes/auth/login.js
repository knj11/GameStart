const { getUser, getUserByEmail } = require("../../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env

async function login(req, res, next) {
  const { email, password } = req.body;
  try {
    const validUser = await getUserByEmail(email);

    if (!validUser) {
      console.log("Not a valid User")
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
        message: "Ivalid Password Error",
        status: 400,
      };
    }
    const token = jwt.sign(
      { id: validUser.id, email: validUser.email },
      JWT_SECRET
    );

    delete validUser.hashedPassword

    res.send({
      user: validUser,
      message: "you're logged in!",
      token,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = login;
