import { notifications } from '@mantine/notifications'
import classes from './ErrorNotification.module.css'

interface ErrorNotificationProps {
  title?: string
  message?: string
}

export const ErrorNotification = ({
  title,
  message,
}: ErrorNotificationProps) => {
  return notifications.show({
    classNames: classes,
    title,
    message,
  })
}
