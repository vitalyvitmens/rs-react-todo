import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { loginUser } from '../../manageAuth'
import { Colors } from '../../constants/colors'
import { validateLoginPassword, validateUsername } from '../../utils/validation'
import { useForm } from '@mantine/form'
import { Stylizloader } from '../../components/Mantine/Stylizloader/Stylizloader'
import {
  Group,
  PasswordInput,
  TextInput,
  Button,
  Box,
  Title,
  NavLink,
} from '@mantine/core'

export const LoginPage = () => {
  const { user, logIn, isLoading, isError } = useAuth()
  const navigate = useNavigate()
  const form = useForm({
    initialValues: { username: '', password: '' },
    validate: {
      username: validateUsername,
      password: validateLoginPassword,
    },
  })

  useEffect(() => {
    if (user?.username !== undefined) {
      navigate('/', { replace: true })
    }
  }, [user, navigate])

  const handleSubmit = form.onSubmit((values) =>
    loginUser(values, () => {
      logIn(values, () => navigate('/', { replace: true }))
    })
  )

  if (isLoading || isError) {
    return <Stylizloader />
  }

  return (
    <Box maw={340} mx="auto" mt={100}>
      <Title ta="center" c={Colors.blue}>
        Authorization
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="login-username"
          radius={5}
          c={Colors.primary}
          label="Username"
          placeholder="Username"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          id="login-password"
          radius={5}
          c={Colors.primary}
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
            c={Colors.red}
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
