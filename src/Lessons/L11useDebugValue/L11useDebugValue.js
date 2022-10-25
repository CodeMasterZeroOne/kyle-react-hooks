import { TextField } from '@mui/material'
import React, { useState } from 'react'

export default function L11useDebugValue() {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    return (
        <>
            <h4>useDebugValue</h4>
            <TextField label='First Name' value={fName} onChange={e => setFName(e.target.value)} />
            <br />
            <TextField label='Last Name' value={lName} onChange={e => setLName(e.target.value)} />
        </>
    )
}
