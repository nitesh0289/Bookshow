const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const cookies = req.headers.cookie;
  const cookieArray = cookies.split(";");
  const authToken = cookieArray.find((c, i) => c.includes(process.env.AUTH_COOKIE)).split("=")[1];

  const payload = jwt.verify(authToken, process.env.JWT_SECRET);
  req.token = payload.userId;
  next();
}

module.exports = authMiddleware;
