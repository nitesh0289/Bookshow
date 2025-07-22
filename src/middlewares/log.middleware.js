const fs = require("fs");
const path = require("path");

function logMiddleware(req, res, next) {
  const log = `Timestamp=${new Date().toISOString()}, URL: ${req.url}, method: ${req.method} \n`;
  fs.appendFileSync(path.join(__dirname, "../log.txt"), log);

  next();
}

module.exports = logMiddleware;
