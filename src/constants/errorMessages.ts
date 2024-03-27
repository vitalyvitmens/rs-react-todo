import { ErrorInfo } from 'react'

export const errorMessages = {
  unknownError: 'Произошла неизвестная ошибка',
  invalidPassword: 'Неверный пароль',
  noDataForTodo: 'Нет данных для создания Todo, заполните хотя бы заголовок',
  userExists: (username: string) =>
    `Пользователь ${username} уже существует. Выберите другой username, если это Вы пожалуйста залогиньтесь`,
  userNotFound: (username: string) => `Пользователь ${username} не найден`,
  createTodoError: (error: string | unknown) =>
    `Не удалось создать todo: ${error}`,
  fetchTodoError: (error: string | unknown) =>
    `Не удалось получить todo: ${error}`,
  fetchTodosError: (error: string | unknown) =>
    `Не удалось получить todos: ${error}`,
  updateTodoError: (error: string | unknown) =>
    `Не удалось обновить todo: ${error}`,
  deleteTodoError: (error: string | unknown) =>
    `Не удалось удалить todo: ${error}`,
  getDerivedStateFromError: (error: Error) =>
    `Error message from getDerivedStateFromError: ${error.message}`,
  componentDidCatch: (error: Error, errorInfo: ErrorInfo) =>
    `Error message from componentDidCatch: ${error.message}\nError info from componentDidCatch: ${errorInfo.componentStack}`,
}
