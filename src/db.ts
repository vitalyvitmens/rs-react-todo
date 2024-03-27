import Dexie, { Table } from 'dexie'

class MyAppDatabase extends Dexie {
  todos!: Table<ITodo, number>
  users!: Table<IUser, number>

  constructor() {
    super('TodosDB')
    this.version(6).stores({
      todos: '++id, title, description, date',
      users: '++id, [username+password]',
    })
  }
}

export interface ITodo {
  id?: number
  title: string
  description: string
  date: string
}
export interface IUser {
  id?: number
  username: string
  password: string
}

const db = new MyAppDatabase()

export default db
