const User = require("../models/user");
const BaseViewModel = require("./base");

class AuthenticateViewModel extends BaseViewModel {
  register = (fullname, username, email) => {
    this.auth.setUser(new User(fullname, email, username));
  };

  getUser = () => {
    return this.auth.user.toString();
  };
}

module.exports = AuthenticateViewModel;
