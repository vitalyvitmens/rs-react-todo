import { RouteObject } from 'react-router-dom'
import { RoutePaths } from './RoutePaths'
import EditTodo from '../pages/EditTodo/EditTodo.lazy'
import HomePage from '../layout/HomePage/HomePage.lazy'
import LoginPage from '../pages/LoginPage/LoginPage.lazy'
import NewTodo from '../pages/NewTodo/NewTodo.lazy'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.lazy'
import Offline from '../pages/Offline/Offline.lazy'
import RegisterPage from '../pages/RegisterPage/RegisterPage.lazy'
import Todo from '../pages/Todo/Todo.lazy'

export const routes: RouteObject[] = [
  {
    path: RoutePaths.CatchAll,
    element: <HomePage />,
    children: [
      { path: RoutePaths.Home, element: <Todo /> },
      { path: RoutePaths.Todo, element: <EditTodo /> },
      { path: RoutePaths.NewTodo, element: <NewTodo /> },
      { path: RoutePaths.NotFound, element: <NotFoundPage /> },
    ],
  },
  { path: RoutePaths.Login, element: <LoginPage /> },
  { path: RoutePaths.Register, element: <RegisterPage /> },
  { path: RoutePaths.Offline, element: <Offline /> },
]
