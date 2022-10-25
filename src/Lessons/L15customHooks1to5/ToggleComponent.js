import React from 'react'
import { Button } from '@mui/material'
import useToggle from './useToggle'

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)


    return (
        <>
            <div>{value.toString()}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={toggleValue}>Toggle</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => toggleValue(true)}>Make true</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => toggleValue(false)}>Make false</Button>
        </>
    )
}
