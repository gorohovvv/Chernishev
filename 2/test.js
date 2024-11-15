const UserManagement = require('./app');

describe('UserManagement', () => {
  let userManagement;

  beforeEach(() => {
    userManagement = new UserManagement();
  });

// Проверка на успешное добавления польз в список

  test('addUser should add a user successfully', () => {
    userManagement.addUser('Egor');
    expect(userManagement.getAllUsers()).toContain('Egor');
  });

// Проверяет, что метод addUser  выбрасывает ошибку, если передан недопустимый username

  test('addUser should throw an error for invalid username', () => {
    expect(() => userManagement.addUser(null)).toThrow('Invalid username');
  });

// Проверяет, что метод removeUser  удаляет существующего пользователя и что он больше не присутствует в списке.

  test('removeUser should remove an existing user', () => {
    userManagement.addUser('Anna');
    userManagement.removeUser('Anna');
    expect(userManagement.getAllUsers()).not.toContain('Anna');
  });

// Проверяет, что метод removeUser  выбрасывает ошибку, если пользователь не найден.

  test('removeUser should throw an error for non-existing user', () => {
    expect(() => userManagement.removeUser('Lena')).toThrow('User not found');
  });

// Проверяет, что метод userExists возвращает true для существующего пользователя.

  test('userExists should return true for an existing user', () => {
    userManagement.addUser('Pavel');
    expect(userManagement.userExists('Pavel')).toBe(true);
  });

// Проверяет, что метод userExists возвращает false для несуществующего пользователя.

  test('userExists should return false for a non-existing user', () => {
    expect(userManagement.userExists('Tobby')).toBe(false);
  });
});