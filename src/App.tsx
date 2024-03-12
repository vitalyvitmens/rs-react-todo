import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { Todo } from './pages/Todo/Todo'
import { EditTodo } from './pages/EditTodo/EditTodo'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { Offline } from './pages/Offline/Offline'
import { NewTodo } from './pages/NewTodo/NewTodo'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { TodoProvider } from './context/TodoContext'

export const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            >
              <Route path="/">
                <Route index element={<Todo />} />
                <Route path=":todoId" element={<EditTodo />} />
                <Route path="new" element={<NewTodo />} />
              </Route>
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/offline" element={<Offline />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  )
}
