const BaseViewModel = require("./base");

class JokesViewModel extends BaseViewModel {
  getJokes = (username) => {
    if (username !== this.auth.user.username) {
      console.log("Unauthorized Access");
      return;
    }
    return this.jokes.jokes;
  };

  addJoke = (username, joke) => {
    if (username !== this.auth.user.username) {
      console.log("Unauthorized Access");
      return;
    }
    this.jokes.addJoke(joke);
    console.log(`joke added by @${username}`);
  };
}

module.exports = JokesViewModel;
