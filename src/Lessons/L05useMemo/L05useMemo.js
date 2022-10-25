import { Button, TextField } from '@mui/material'
import React, { useState, useMemo, useEffect } from 'react'

export default function L05useMemo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme Changed')
        return () => { }
    }, [themeStyles])

    function slowFunction(num) {
        console.log('Calling slow function')
        for (let i = 0; i < 1000000000; i++) { }
        return num * 2
    }

    return (
        <>
            <h4>useMemo</h4>
            <TextField type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <Button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</Button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
    )
}