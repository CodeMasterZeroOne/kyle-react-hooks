import { Button } from '@mui/material'
import React, { useState } from 'react'
import useEffectOnce from './useEffectOnce'

export default function EffectOnceComponent() {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert('Hi'))
    return (
        <>
            <div>{count}</div>
            <Button variant='outlined' onClick={() => setCount(c => c + 1)}>Increment</Button>
        </>
    )
}
