import { Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Stylizloader } from '../Mantine/Stylizloader/Stylizloader'

interface PrivateRouteProps {
  route: RouteObject
}

export const PrivateRoute = ({ route }: PrivateRouteProps) => {
  const { user } = useAuth()
  const location = useLocation()

  if (user?.username === undefined) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return (
    <Suspense fallback={<Stylizloader />}>
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
