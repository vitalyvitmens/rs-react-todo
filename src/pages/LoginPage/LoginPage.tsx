import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { loginUser } from '../../manageAuth'
import { useForm } from '@mantine/form'
import {
  Group,
  PasswordInput,
  TextInput,
  Button,
  Box,
  Title,
  NavLink,
  Center,
  Loader,
} from '@mantine/core'

export const LoginPage = () => {
  const { user, logIn, isLoading, isSuccess, isError } = useAuth()
  const navigate = useNavigate()
  const form = useForm({
    initialValues: { username: '', password: '' },
    validate: {
      username: (value) =>
        value.length < 2 ? 'Username must have at least 2 letters' : null,
      password: (value) => (value ? null : 'Invalid password'),
    },
  })

  useEffect(() => {
    if (user?.username !== undefined) {
      navigate('/')
    }
  }, [navigate, user])

  const handleSubmit = form.onSubmit((values) =>
    loginUser(values, () => {
      logIn(values, () => navigate('/', { replace: true }))
    })
  )

  if (isLoading || isSuccess || isError) {
    return (
      <Center>
        <Loader mt="50%" color="#0000FF" size={77} />
      </Center>
    )
  }

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c="#0000FF">
        Authorization
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="login-username"
          radius={5}
          c="#FFC94C"
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          id="login-password"
          radius={5}
          c="#FFC94C"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Group wrap="nowrap" mt="md">
          <NavLink
            href="/register"
            label="Ещё не зарегистрированы?"
            variant="subtle"
            active
            c="#FF0000"
            fw="bold"
          />
          <Button type="submit" w="120px" bg="#006400" radius={5}>
            Login
          </Button>
        </Group>
      </form>
    </Box>
  )
}
