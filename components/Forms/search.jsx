import React, { useState } from 'react'
import { Input } from '@mui/material'

const Search = () => {
  const [search, setSearch] = useState('')

  const searchJobs = e => {
    setSearch(e.target.value)
  }

  return (
    <div className='flex items-start justify-start mb-4 '>
      <Input
        onChange={searchJobs}
        value={search}
        sx={{
          width: '100%',
          height: '100%',
          padding: '0px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          '& .MuiInputBase-input': {
            padding: '10px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          },
        }}
        placeholder='Search'
      />
    </div>
  )
}

export default Search
