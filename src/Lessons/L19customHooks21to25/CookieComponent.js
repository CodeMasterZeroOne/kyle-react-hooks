import { Button } from '@mui/material'
import React from 'react'
import useCookie from './useCookie'

export default function CookieComponent() {
  const [value, update, remove] = useCookie('name', 'John')

  return (
    <>
      <div>
        {value}
      </div>
      <Button variant='outlined' sx={{ margin: 1 }} onClick={() => update('Sally')}>Change Name to Sally</Button>
      <Button variant='outlined' sx={{ margin: 1 }} onClick={remove}>Delete Name</Button>
    </>
  )
}
