import { startTransition } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { RoutePaths } from '../routes/RoutePaths'

export const navigateTo = (navigate: NavigateFunction, path: RoutePaths) => {
  startTransition(() => {
    navigate(path, { replace: true })
  })
}
