import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { registerUser } from '../../manageAuth'
import { useForm } from '@mantine/form'
import {
  PasswordInput,
  Group,
  TextInput,
  Button,
  Box,
  Title,
  NavLink,
} from '@mantine/core'

export const RegisterPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  console.log('####: user', user)
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

  const handleSubmit = form.onSubmit(({ username, password }) =>
    registerUser({ username, password }, () => navigate('/login'))
  )

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c="#0000FF">
        Registration
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="register-username"
          radius={5}
          c="#FFC94C"
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          id="register-password"
          radius={5}
          c="#FFC94C"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          id="register-confirm-password"
          radius={5}
          c="#FFC94C"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />
        <Group wrap="nowrap" mt="md">
          <NavLink
            href="/login"
            label="Уже зарегистрированы?"
            variant="subtle"
            active
            c="#FF0000"
            fw="bold"
          />
          <Button type="submit" w="120px" bg="#006400" radius={5}>
            Register
          </Button>
        </Group>
      </form>
    </Box>
  )
}
