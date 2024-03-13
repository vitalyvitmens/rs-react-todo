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

  if (!user?.username) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Suspense
      fallback={
        <Center>
          <Loader mt="50%" color="#0000FF" size={77} />
        </Center>
      }
    >
      <Routes>
        <Route>
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
