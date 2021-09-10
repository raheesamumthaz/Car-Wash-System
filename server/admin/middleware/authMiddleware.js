const jwt = require("jsonwebtoken");

//Used to jwt check token and guard pages
const requireAuth = (req, res, next) => {

  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  let token = req.headers.authorization.split(" ")[1];
 
  if (token === "null") {
    return res.status(401).send("Unauthorized Request");
  } else {
    jwt.verify(token, "Admin is the superuser", (err, decodedToken) => {
      if (err) {
        return res.status(401).send("Unauthorized Request");
      } else {
      
        req.userId = decodedToken.id;
        next();
      }
    });
  }
};

module.exports = { requireAuth };
