import { Button } from '@mui/material'
import React, { useState } from 'react'
import useFetch from './useFetch'

export default function FetchComponent() {
    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {},
        [id]
    )
    return (
        <>
            <div>{id}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setId(i => i + 1)}>Increment ID</Button>
            <div>Loading: {loading.toString()}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
        </>
    )
}
