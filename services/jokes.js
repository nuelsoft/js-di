class Jokes {
  constructor() {
    this.jokes = [];
  }
  addJoke = (joke) => {
    this.jokes.push(joke);
  };
}

module.exports = Jokes;
