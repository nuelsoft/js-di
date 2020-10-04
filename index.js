const secretary = require("./secretary");
const AuthenticateViewModel = require("./view_models/authenticate");
const JokesViewModel = require("./view_models/joke_vm");

secretary.initialize();

const authViewModel = new AuthenticateViewModel();

const jokesViewModel = new JokesViewModel();

authViewModel.register("Emmanuel Sunday", "nuelsoft", "nuel.mailbox@gmail.com");

console.log(authViewModel.getUser());

jokesViewModel.addJoke("nuelsoft", "A goat is marine cow");

jokesViewModel.addJoke("nuelsoft", "A cow is marine goat");

console.log(jokesViewModel.getJokes("nuelsoft"));
