import { Button, TextField } from '@mui/material'
import React, { useCallback, useState } from 'react'
import List from './List'

export default function L06useCallback() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <div style={theme}>
            <h4>useCallback</h4>

            <TextField type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</Button>
            <List getItems={getItems} />
        </div>
    )
}