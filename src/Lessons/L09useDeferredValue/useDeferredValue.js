import { TextField } from '@mui/material'
import React, { useState } from 'react'
import List from './List'


export default function L09useDeferredValue() {

    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    return (
        <>
            <h4>useDeferredValue</h4>

            <TextField type='text' label='Input' value={input} onChange={handleChange} />
            <List input={input} />
        </>
    )
}
