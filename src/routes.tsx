import { RouteObject } from 'react-router-dom'
import EditTodo from './pages/EditTodo/EditTodo.lazy'
import HomePage from './layout/HomePage/HomePage.lazy'
import LoginPage from './pages/LoginPage/LoginPage.lazy'
import NewTodo from './pages/NewTodo/NewTodo.lazy'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.lazy'
import Offline from './pages/Offline/Offline.lazy'
import RegisterPage from './pages/RegisterPage/RegisterPage.lazy'
import Todo from './pages/Todo/Todo.lazy'

export const routes: RouteObject[] = [
  {
    path: '/*',
    element: <HomePage />,
    children: [
      { path: '/', element: <Todo /> },
      { path: '/:todoId', element: <EditTodo /> },
      { path: '/new', element: <NewTodo /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/offline', element: <Offline /> },
]