import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTransition } from 'react'

export default function L08useTransition() {
    const [isPending, startTransition] = useTransition() //low priority state
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const LIST_SIZE = 20000

    function handleChange(e) {
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }
    return (
        <>
            <h4>useTransition</h4>

            <TextField type='text' label='Input' value={input} onChange={handleChange} />
            {isPending ?
                <div>Loading...</div>
                : list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
        </>
    )
}
