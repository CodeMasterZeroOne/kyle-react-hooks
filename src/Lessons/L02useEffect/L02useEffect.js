import { Button, Grid } from "@mui/material"
import React, { useState, useEffect } from "react"

export default function L02useEffect() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`) //using temple strings ````````
            .then(response => response.json())
            .then(json => setItems(json))

        //return runs first to cleanup
        return () => { }
    }, [resourceType])

    return (
        <div>
            <h4>useEffect</h4>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Button variant="outlined" onClick={() => setResourceType('posts')}>Posts</Button>
                <Button variant="outlined" onClick={() => setResourceType('users')}>Users</Button>
                <Button variant="outlined" onClick={() => setResourceType('comments')}>Comments</Button>
            </Grid>

            <h4>{items.length + ' ' + resourceType}</h4>
            {items.map(item => {
                return <p key={item.id}>{JSON.stringify(item)}</p>
            })}
        </div>

    )
}