const { createUser } = require("../../db/index");
const { getUserByUserName } = require("../../db/index");
const jwt = require("jsonwebtoken");

async function signUp(req, res, next) {
  const {
    username,
    password,
    description,
    firstName,
    lastName,
    roleId,
    passWord,
  } = req.body;

  try {
    if (password.split("").length < 8) {
      next("Password too short!");
    } else {
      const checkUser = await getUserByUserName(username);
      if (checkUser) {
        next("User name already used!");
      } else {
        const createdUser = await createUser({
          username,
          password,
          description,
          firstName,
          lastName,
          roleId,
          passWord,
        });
        const token = jwt.sign(
          { id: createdUser.id, username: createdUser.username },
          process.env.JWT_SECRET
        );

        res.json({
          user: {
            id: createdUser.id,
            username: createdUser.username,
          },
          message: `You are signed up successfully!`,
          token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
}

module.exports = signUp;
