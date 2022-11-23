import { Button } from '@mui/material'
import React, { useState } from 'react'
import usePrevious from './usePrevious'

export default function PreviousComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Pawel')
    const previousCount = usePrevious(count)
    return (
        <>
            <div>{count} - {previousCount}</div>
            <div>{name}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c + 1)}>Increment</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setName('John')}>Change Name</Button>
        </>
    )
}
