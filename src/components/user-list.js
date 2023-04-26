import User from '../models/user.js';

export default class UserList {
  constructor() {
    this.users = [];
  }

  addUser(username) {
    const userId = this.users.length;
    const newUser = new User(username, userId);
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  getUserByUsername(username) {
    return this.users.find((user) => user.username === username);
  }

  getAllUsers() {
    return this.users;
  }
}
