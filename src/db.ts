import Dexie, { Table } from 'dexie'

class MyAppDatabase extends Dexie {
  todos!: Table<ITodos, number>
  users!: Table<IUsers, number>

  constructor() {
    super('TodosDB')
    this.version(5).stores({
      todos: '++id, title, description, date',
      users: '++id, username, password',
    })
  }
}

export interface ITodos {
  id?: number
  title: string
  description: string
  date: string
}
export interface IUsers {
  id?: number
  username: string
  password: string
}

const db = new MyAppDatabase()
console.log(db)
console.log(db.todos)
console.log(db.users)

export default db
