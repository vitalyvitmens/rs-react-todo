import { Component, ErrorInfo, ReactNode } from 'react'
import { Colors } from '../../constants/colors'
import { ErrorNotification } from '../Mantine/ErrorNotification/ErrorNotification'
import { Center, Text } from '@mantine/core'
import { notificationTitles } from '../../constants/notificationTitles'
import { errorMessages } from '../../constants/errorMessages'

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
      title: notificationTitles.errorBoundary,
      message: errorMessages.getDerivedStateFromError(error),
    })

    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    ErrorNotification({
      title: notificationTitles.errorBoundary,
      message: errorMessages.componentDidCatch(error, errorInfo),
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center pt="25%" ml={30} mr={10}>
          <Text size="5rem" fw={800} c={Colors.red}>
            Что-то пошло не так!
          </Text>
        </Center>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
