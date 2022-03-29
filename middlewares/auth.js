const basicAuth = require("basic-auth");
const userService = require("../services/user-service");

async function auth(req, res, next) {
  var user = basicAuth(req);
  console.log(user);

  if (!user || !user.name || !user.pass) {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.sendStatus(401);
    return;
  }

  if (await userService.authenticate({username: user.name, password: user.pass})) {
    next();
  } else {
    res.set("WWW-Authenticate", "Basic realm=Authorization Required");
    res.sendStatus(401);
    return;
  }
}

module.exports = auth;
