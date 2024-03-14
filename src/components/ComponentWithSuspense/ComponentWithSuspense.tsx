import { Suspense, ComponentType, ReactNode } from 'react'
import { NoProps } from '../../types'
import { Stylizloader } from '../Mantine/Stylizloader/Stylizloader'

interface ComponentProps {
  component: ComponentType<NoProps>
  fallback?: ReactNode
  [key: string]: unknown
}

export function ComponentWithSuspense({
  component: Component,
  fallback = <Stylizloader />,
  ...otherProps
}: ComponentProps) {
  return (
    <Suspense fallback={fallback}>
      <Component {...otherProps} />
    </Suspense>
  )
}
