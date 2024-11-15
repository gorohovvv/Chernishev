class UserManagement {
    constructor() {
      this.users = [];
    }
  
    addUser(username) {
      if (!username || typeof username !== 'string') {
        throw new Error('Invalid username');
      }
      this.users.push(username);
    }
  
    removeUser(username) {
      const userIndex = this.users.indexOf(username);
      if (userIndex === -1) {
        throw new Error('User not found');
      }
      this.users.splice(userIndex, 1);
    }
  
    getAllUsers() {
      return this.users;
    }
  
    userExists(username) {
      return this.users.includes(username);
    }
  }
  
  module.exports = UserManagement;