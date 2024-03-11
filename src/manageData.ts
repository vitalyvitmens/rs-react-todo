import db, { ITodos } from './db'

export const createTodo = async ({ title, description, date }: ITodos) => {
  try {
    await db.todos.add({ title, description, date })
    console.log('Todo successfully created!')
  } catch (error) {
    console.log('Failed to create todo!', error)
  }
}

export const readTodo = async (todoId: ITodos['id']) => {
  try {
    const todo = await db.todos.get({ id: todoId })
    return todo
  } catch (error) {
    console.log('Failed to read todo!', error)
  }
}

export const readTodos = async () => {
  try {
    const todo = await db.todos.toArray()
    return todo
  } catch (error) {
    console.log('Failed to read todos!', error)
    return []
  }
}

export const updateTodo = async ({ id, title, description, date }: ITodos) => {
  try {
    await db.todos.update(id!, { title, description, date })
    console.log('Todo updated successfully!')
  } catch (error) {
    console.log('Failed to update todo!', error)
  }
}

export const deleteTodo = async (id: number) => {
  try {
    await db.todos.delete(id!)
  } catch (error) {
    console.log('Failed to delete todo!', error)
  }
}
