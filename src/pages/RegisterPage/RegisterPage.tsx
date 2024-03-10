import { useForm } from '@mantine/form'
import {
  PasswordInput,
  Group,
  TextInput,
  Button,
  Box,
  Title,
} from '@mantine/core'

export const RegisterPage = () => {
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: (value) =>
        value.length < 2 ? 'Username must have at least 2 letters' : null,
      password: (value) =>
        value.length < 6 ? 'Password must have at least 6 letters' : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  })

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c="#0000FF">
        Registration
      </Title>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        <PasswordInput
          radius={5}
          c="#FFC94C"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
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
