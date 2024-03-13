import { Suspense, ComponentType, ReactNode } from 'react'
import { NoProps } from '../../types'

interface ComponentProps {
  component: ComponentType<NoProps>
  fallback?: ReactNode
  [key: string]: unknown
}

export function ComponentWithSuspense({
  component: Component,
  fallback = 'Загрузка...',
  ...otherProps
}: ComponentProps) {
  return (
    <Suspense fallback={fallback}>
      <Component {...otherProps} />
    </Suspense>
  )
}
