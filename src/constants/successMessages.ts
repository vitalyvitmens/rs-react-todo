export const successMessages = {
  userRegistered: (username: string) =>
    `Пользователь ${username} успешно зарегистрировался`,
  userLoggedIn: (username: string) =>
    `Пользователь ${username} успешно вошел в систему`,
  userLoggedOut: (username?: string) =>
    `Пользователь ${username} вышел из системы`,
  todoCreated: (title: string) => `Todo: ${title} успешно создана`,
  todoUpdated: (title: string) => `Todo: ${title} успешно обновлена`,
  deleteTodoSuccess: (id: string | number) =>
    `Todo c id: ${id} успешно удалена`,
}
