import { Button } from '@mui/material'
import React from 'react'
import useArray from './useArray'

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])

    return (
        <>
            <div>{array.join(', ')}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => push(7)}>Add 7</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => update(1, 9)}>Change second Element to 9</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => remove(1)}>Remove Second Element</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => filter(n => n < 4)}>Keep Numbers Less Than 4</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => set([1, 2, 3, 4, 5, 6])}>Set to [1,2,3,4,5,6]</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={clear}>Clear</Button>
        </>
    )
}
