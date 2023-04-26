import User from '../models/user.js';

export default class UserList {
  constructor() {
    this.usersKey = 'users';

    if (!sessionStorage.getItem(this.usersKey)) {
      sessionStorage.setItem(this.usersKey, JSON.stringify([]));
    }
  }

  addUser(username) {
    const users = this.getAllUsers();
    const userId = users.length;
    const newUser = new User(username, userId);
    users.push(newUser);
    sessionStorage.setItem(this.usersKey, JSON.stringify(users));
    return newUser;
  }

  getUserById(id) {
    const users = this.getAllUsers();
    return users.find((user) => user.id === id);
  }

  getUserByUsername(username) {
    const users = this.getAllUsers();
    return users.find((user) => user.username === username);
  }

  getAllUsers() {
    return JSON.parse(sessionStorage.getItem(this.usersKey));
  }
}
