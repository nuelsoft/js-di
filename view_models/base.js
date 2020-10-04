const Injector = require("../injector");

class BaseViewModel {
  constructor() {
    this.auth = Injector.getDependency("auth");
    this.jokes = Injector.getDependency("jokes");
  }
}

module.exports = BaseViewModel;
