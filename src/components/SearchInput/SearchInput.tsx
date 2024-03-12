import { Box, Divider, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

type SearchInputType = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({ setSearchInput }: SearchInputType) => {
  return (
    <Box m="0 8px 10px 0">
      <Input
        radius={15}
        id="search"
        name="search"
        placeholder="Search todo"
        rightSection={<IconSearch size={24} />}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Divider size={2} w="100%" mt={10} color="#0000FF" />
    </Box>
  )
}
