class User {
  constructor(name, email, username) {
    this.name = name;
    this.username = username;
    this.email = email;
  }

  toString() {
    return `name -> ${this.name}  username -> ${this.username} email -> ${this.email}`;
  }
}

module.exports = User;
