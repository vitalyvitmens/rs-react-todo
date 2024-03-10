import { useForm } from '@mantine/form'
import {
  Group,
  PasswordInput,
  TextInput,
  Button,
  Box,
  Title,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'

export const LoginPage = () => {
  const form = useForm({
    initialValues: { username: '', password: '' },
    validate: {
      username: (value) =>
        value.length < 2 ? 'Username must have at least 2 letters' : null,
      password: (value) => (value ? null : 'Invalid password'),
    },
  })

  const handleError = (errors: typeof form.errors) => {
    if (errors.username) {
      notifications.show({
        message: 'Please fill username field',
        color: 'red',
      })
    } else if (errors.password) {
      notifications.show({
        message: 'Please provide a valid password',
        color: 'red',
      })
    }
  }

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c="#0000FF">
        Authorization
      </Title>
      <form onSubmit={form.onSubmit(console.log, handleError)}>
        <TextInput
          radius={5}
          c="#FFC94C"
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          radius={5}
          c="#FFC94C"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Group justify="flex-end" mt="md">
          <Button type="submit" bg="#006400" radius={5}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  )
}
