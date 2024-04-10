import { Colors } from '../../constants/colors'
import { Box, Divider, Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'

type SearchInputProps = {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({ setSearchInput }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
    setSearchInput(newValue.toLowerCase())
  }

  return (
    <Box m="0 8px 10px 0">
      <Input
        radius={15}
        id="search"
        name="search"
        placeholder="Search todo"
        rightSection={<IconSearch size={24} />}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Divider size={2} w="100%" mt={10} color={Colors.primary} />
    </Box>
  )
}
