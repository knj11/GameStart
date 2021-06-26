const { getUserById } = require("../../db");
const jwt = require("jsonwebtoken");

async function attachUser(req, res, next) {
  const prefix = "Bearer ";

  try {
    const { authorization: auth } = req.headers;
    if (!auth) {
      next();
    } else if (auth.startsWith(prefix)) {
      const token = auth.slice(prefix.length);
      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      if (id) {
        const user = await getUserById(id);

        req.user = user;

        next();
      }
    } else {
      next({
        name: "AuthorizationHeaderError",
        message: `Authorization token must start with ${prefix}`,
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
}
module.exports = attachUser;
