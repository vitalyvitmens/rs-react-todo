import { Box, Input, Button, Paper } from '@mantine/core'

type SearcBoxPropType = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBox = ({ setSearchTerm }: SearcBoxPropType) => {
  return (
    <Box style={{ padding: '10px 10px', borderBottom: '1px solid #cdcdcd' }}>
      <Paper
        component="form"
        style={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Input
          style={{ ml: 1, flex: 1 }}
          id="search"
          name="search"
          placeholder="Search todo"
          // inputProps={{ 'aria-label': 'search todo' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="button" style={{ p: '10px' }} aria-label="search">
          {/* <Search /> */}
        </Button>
      </Paper>
    </Box>
  )
}
