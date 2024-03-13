import db, { ITodos } from './db'
import { DefaultNotification } from './components/MantineNotifications/components/DefaultNotification/DefaultNotification'
import { ErrorNotification } from './components/MantineNotifications/components/ErrorNotification/ErrorNotification'

export const createTodo = async ({ title, description, date }: ITodos) => {
  try {
    await db.todos.add({ title, description, date })
    DefaultNotification({
      title: 'Success',
      message: `Todo: ${title} успешно создана`,
    })
  } catch (error) {
    ErrorNotification({
      title: 'Error',
      message: `Не удалось создать todo: ${error}`,
    })
  }
}

export const readTodo = async (todoId: ITodos['id']) => {
  try {
    const todo = await db.todos.get({ id: todoId })
    return todo
  } catch (error) {
    ErrorNotification({
      title: 'Error',
      message: `Не удалось получить todo: ${error}`,
    })
  }
}

export const readTodos = async () => {
  try {
    const todo = await db.todos.toArray()
    return todo
  } catch (error) {
    ErrorNotification({
      title: 'Error',
      message: `Не удалось получить todos: ${error}`,
    })
    return []
  }
}

export const updateTodo = async ({ id, title, description, date }: ITodos) => {
  try {
    await db.todos.update(id!, { title, description, date })
    DefaultNotification({
      title: 'Success',
      message: `Todo: ${title} успешно обновлена`,
    })
  } catch (error) {
    ErrorNotification({
      title: 'Error',
      message: `Не удалось обновить todo: ${error}`,
    })
  }
}

export const deleteTodo = async (id: number) => {
  try {
    await db.todos.delete(id!)
    DefaultNotification({
      title: 'Success',
      message: `Todo c id: ${id!} успешно удалена`,
    })
  } catch (error) {
    ErrorNotification({
      title: 'Error',
      message: `Не удалось удалить todo: ${error}`,
    })
  }
}
