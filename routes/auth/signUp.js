const { createUser, getUserByEmail } = require("../../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

async function signUp(req, res, next) {
  const { email, password, description, firstName, lastName } = req.body;

  try {
    const checkUser = await getUserByEmail(email);
    if (checkUser)
      throw {
        name: "EmailTaken",
        message: "Email is already in Use. Please try logging in",
        status: 400,
      };

    // RoleId=2 means its a standard Customer
    const roleId = 2;
    const createdUser = await createUser({
      email,
      password,
      description,
      firstName,
      lastName,
      roleId,
    });
    const token = jwt.sign({ id: createdUser.id, email: createdUser.email }, JWT_SECRET);

    res.json({
      user: {
        id: createdUser.id,
        email: createdUser.email,
      },
      message: `You are signed up successfully!`,
      token,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = signUp;
