import { TextField } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"

export default function L04useRef() {
    const [name, setName] = useState('')
    const prevName = useRef('')


    useEffect(() => {
        prevName.current = name

        return () => { }
    }, [name])

    return (
        <div>
            <h4>useRef</h4>

            <TextField
                variant="outlined"
                label='Name'
                value={name}
                onChange={e => setName(e.target.value)} />

            <div>My name is {name} and it used to be {prevName.current}</div>
        </div>
    )
}