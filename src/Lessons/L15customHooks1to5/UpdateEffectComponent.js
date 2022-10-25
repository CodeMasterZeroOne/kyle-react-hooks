import { Button } from '@mui/material'
import React, { useState } from 'react'
import useUpdateEffect from './useUpdateEffect'

export default function UpdateEffectComponent() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count))
    return (
        <>
            <div>{count}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c + 1)}>Increment</Button>
        </>
    )
}
