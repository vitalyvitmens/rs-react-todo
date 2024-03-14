import { Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Center, Loader } from '@mantine/core'
import { RouteObject } from 'react-router-dom'

interface PrivateRouteProps {
  route: RouteObject
}

export const PrivateRoute = ({ route }: PrivateRouteProps) => {
  const { user } = useAuth()
  const location = useLocation()

  if (user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route element={route.element}>
          {route.children?.map((child) => (
            <Route
              key={route.element?.toString()}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}
