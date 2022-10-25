import { Button } from '@mui/material'
import React, { useState } from 'react'
import useDebounce from './useDebounce'

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])
    return (
        <>
            <div>{count}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c + 1)}>Increment</Button>
        </>
    )
}
