import db, { ITodos } from './db'
import { DefaultNotification } from './components/Mantine/DefaultNotification/DefaultNotification'
import { ErrorNotification } from './components/Mantine/ErrorNotification/ErrorNotification'
import { notificationTitles } from './constants/notificationTitles'
import { successMessages } from './constants/successMessages'
import { errorMessages } from './constants/errorMessages'

export const createTodo = async ({ title, description, date }: ITodos) => {
  try {
    await db.todos.add({ title, description, date })
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.todoCreated(title),
    })
  } catch (error) {
    ErrorNotification({
      title: notificationTitles.error,
      message: errorMessages.createTodoError(error),
    })
  }
}

export const readTodo = async (todoId: ITodos['id']) => {
  try {
    const todo = await db.todos.get({ id: todoId })
    return todo
  } catch (error) {
    ErrorNotification({
      title: notificationTitles.error,
      message: errorMessages.fetchTodoError(error),
    })
  }
}

export const readTodos = async () => {
  try {
    const todo = await db.todos.toArray()
    return todo
  } catch (error) {
    ErrorNotification({
      title: notificationTitles.error,
      message: errorMessages.fetchTodosError(error),
    })
    return []
  }
}

export const updateTodo = async ({ id, title, description, date }: ITodos) => {
  try {
    await db.todos.update(id!, { title, description, date })
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.todoUpdated(title),
    })
  } catch (error) {
    ErrorNotification({
      title: notificationTitles.error,
      message: errorMessages.updateTodoError(error),
    })
  }
}

export const deleteTodo = async (id: number) => {
  try {
    await db.todos.delete(id!)
    DefaultNotification({
      title: notificationTitles.success,
      message: successMessages.deleteTodoSuccess(id),
    })
  } catch (error) {
    ErrorNotification({
      title: notificationTitles.error,
      message: errorMessages.deleteTodoError(error),
    })
  }
}
