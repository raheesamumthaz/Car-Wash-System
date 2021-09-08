const jwt = require("jsonwebtoken");

//Used to jwt check token and guard pages
const requireAuth = (req, res, next) => {
  console.log("headere...", req.headers);
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  let token = req.headers.authorization.split(" ")[1];
  console.log("token...", token);
  if (token === "null") {
    return res.status(401).send("Unauthorized Request");
  } else {
    jwt.verify(token, "A strong secret token", (err, decodedToken) => {
      if (err) {
        return res.status(401).send("Unauthorized Request");
      } else {
        console.log(decodedToken);
        req.userId = decodedToken.id;
        next();
      }
    });
  }
};

module.exports = { requireAuth };
