import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { TodoProvider } from './context/TodoContext'
import { routes } from './routes'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

export const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            {routes?.map((route) => (
              <Route
                key={route.element?.toString()}
                path={route?.path}
                element={
                  <ErrorBoundary>
                    {route?.children ? (
                      <PrivateRoute
                        route={route}
                        key={route.element?.toString()}
                      />
                    ) : (
                      route.element
                    )}
                  </ErrorBoundary>
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </AuthProvider>
  )
}
