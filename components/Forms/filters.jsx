import React from 'react'
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  Switch,
  Select,
  InputLabel,
} from '@mui/material'

const FilterComponent = () => {
  return (
    <div className='flex flex-col flex-[30%] max-w-60 shadow-md p-4 items-start justify-start  border bg-white'>
      <div className='flex flex-col justify-start'>
        <FormControl variant='outlined' fullWidth>
          <InputLabel id='filter-by-skills'>Filter By Skills</InputLabel>
          <Select labelId='filter-by-skills'>
            {/* Insert Skills options here */}
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Switch color='primary' />}
          label='Remote Ok Only'
        />

        <FormControlLabel
          control={<Switch color='primary' />}
          label='Featured Jobs Only'
        />
      </div>

      <div className='w-full flex flex-col justify-start my-4'>
        <h2 className='text-start font-semibold'>Job Types</h2>
        <FormControlLabel
          control={
            <Checkbox icon={<CheckBoxOutlineBlankIcon />} color='primary' />
          }
          label='Full Time'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Part Time'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Internship'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Contract'
        />
      </div>

      <div className='w-full flex flex-col justify-start mb-4'>
        <h2 className='text-start font-semibold'>Experience Level</h2>
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Junior'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Medior'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Senior'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='Tech Lead'
        />
      </div>

      <div className='w-full flex flex-col justify-start mb-4'>
        <h2 className='text-start font-semibold'>Salary Range</h2>
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='< £20K'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='£20K - £50K'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='£50K - £100K'
        />
        <FormControlLabel
          control={<Checkbox color='primary' />}
          label='> £100K'
        />
      </div>
    </div>
  )
}

const CheckBoxOutlineBlankIcon = () => {
  return (
    <svg
      xmlns='XXXXXXXXXXXXXXXXXXXXXXXXXX'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='#4e4e4e'
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' />
    </svg>
  )
}

export default FilterComponent
