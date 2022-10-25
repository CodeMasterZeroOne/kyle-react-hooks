import React, { useState } from 'react'
import { Button } from '@mui/material'
import useTimeout from './useTimeout'

export default function TimeoutComponent() {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)
    return (
        <>
            <div>{count}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c + 1)}>Increment</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={clear}>Clear Timeout</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={reset}>Reset Timeout</Button>
        </>
    )
}
