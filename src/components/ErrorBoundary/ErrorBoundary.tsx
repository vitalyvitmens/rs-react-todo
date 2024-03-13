import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorNotification } from '../MantineNotifications/components/ErrorNotification/ErrorNotification'

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
        <div
          style={{
            display: 'flex',
            margin: 'auto',
            color: 'red',
            fontSize: '3rem',
            fontWeight: 'bold',
          }}
        >
          Что-то пошло не так!
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
