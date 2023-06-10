const jwt = require("jsonwebtoken");
const config = require("config");
const secretKey = config.get("secretKey");

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Token not found" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Token not found" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
}
module.exports = verifyToken;
