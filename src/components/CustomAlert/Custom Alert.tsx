import { Notification } from '@mantine/core'

export const CustomAlert = (message: string) => {
  return <Notification title="We notify you that">{message}</Notification>
}
