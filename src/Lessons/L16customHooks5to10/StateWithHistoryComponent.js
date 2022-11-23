import { Button } from '@mui/material'
import React, { useState } from 'react'
import useStateWithHistory from './useStateWithHistory'

export default function StateWithHistoryComponent() {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1)
    const [name, setName] = useState('Pawel')
    return (
        <>
            <div>{count}</div>
            <div>{history.join(', ')}</div>
            <div>Pointer - {pointer}</div>
            <div>{name}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c * 2)}>Double</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setCount(c => c + 1)}>Increment</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={back}>Back</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={forward}>Forward</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => go(2)}>Go to index 2</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setName('John')}>Change Name</Button>
        </>
    )
}
