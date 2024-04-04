import { Box, Group, Image } from '@mantine/core'

interface ImageMTProps {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  m?: string | number
  p?: string | number
  h?: number
  src?: string
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  radius?: string | number
}

export const ImageMT: React.FC<ImageMTProps> = ({
  justify = 'center',
  m = 'none',
  p = 'none',
  h = 100,
  src = 'https://github.com/vitalyvitmens/new-project-vite-mantine-dexie-auth-pwa/blob/main/src/assets/sadSmiley.jpg?raw=true',
  fit = 'contain',
  radius = '50%',
}) => {
  return (
    <Group justify={justify}>
      <Box m={m} p={p}>
        <Image radius={radius} h={h} w="auto" fit={fit} src={src} />
      </Box>
    </Group>
  )
}
