import { Box, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

type SearcBoxPropType = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBox = ({ setSearchTerm }: SearcBoxPropType) => {
  return (
    <Box
      style={{
        display: 'flex',
        padding: '10px 10px',
        borderBottom: '1px solid #cdcdcd',
      }}
    >
      <Input
        radius={15}
        id="search"
        name="search"
        placeholder="Search todo"
        rightSection={<IconSearch size={16} />}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  )
}
