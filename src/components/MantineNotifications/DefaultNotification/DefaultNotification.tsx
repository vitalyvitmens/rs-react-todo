import { notifications } from '@mantine/notifications'
import classes from './DefaultNotification.module.css'

interface DefaultNotificationProps {
  title: string
  message: string
}

export const DefaultNotification = ({
  title,
  message,
}: DefaultNotificationProps) => {
  return notifications.show({
    classNames: classes,
    title,
    message,
  })
}
