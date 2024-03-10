import db, { ITodos } from './db'

export const insertTodo = async ({ title, description, date }: ITodos) => {
  try {
    await db.todos.add({ title, description, date })
    console.log('Data inserted successfully')
  } catch (error) {
    console.log('Cannot insert data', error)
  }
}

export const getAllTodos = async () => {
  try {
    const todo = await db.todos.toArray()
    return todo
  } catch (error) {
    console.log('Cannot get todos', error)
    return []
  }
}

export const getTodo = async (todoId: ITodos['id']) => {
  try {
    const todo = await db.todos.get({ id: todoId })
    return todo
  } catch (error) {
    console.log('Cannot get todo', error)
  }
}

export const updateTodo = async ({ id, title, description, date }: ITodos) => {
  try {
    await db.todos.update(id!, { title, description, date })
    console.log('Data updated succesfully')
  } catch (error) {
    console.log('Cannot update todo', error)
  }
}

export const deleteTodo = async (id: number) => {
  try {
    await db.todos.delete(id!)
  } catch (error) {
    console.log('Cannot delete todo', error)
  }
}
