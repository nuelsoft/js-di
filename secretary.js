const Injector = require("./injector");
const Auth = require("./services/auth");
const Jokes = require("./services/jokes");

const initialize = () => {
  Injector.addDepency(new Auth(), "auth");
  Injector.addDepency(new Jokes(), "jokes");
};

module.exports = { initialize };
