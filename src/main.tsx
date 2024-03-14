import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { theme } from './theme.ts'
import './index.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Notifications />
    <App />
  </MantineProvider>
)
