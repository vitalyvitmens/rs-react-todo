import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorNotification } from '../Mantine/ErrorNotification/ErrorNotification'
import { Center, Text } from '@mantine/core'

interface ErrorBoundaryState {
  hasError: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    ErrorNotification({
      title: 'Error Boundary',
      message: `Error message from getDerivedStateFromError: ${error.message}`,
    })

    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    ErrorNotification({
      title: 'Error Boundary',
      message: `Error message from componentDidCatch: ${error.message}\nError info from componentDidCatch: ${errorInfo.componentStack}`,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center pt="25%" ml={30} mr={10}>
          <Text size="5rem" fw={800} c="#FF0000">
            Что-то пошло не так!
          </Text>
        </Center>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
