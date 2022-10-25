import { Button, Grid } from "@mui/material"
import React, { useState } from "react"

export default function L01useState() {

    const [number, setNumber] = useState(0)
    function decrementNumber() {
        setNumber(prevNumber => prevNumber - 1)
    }
    function incrementNumber() {
        setNumber(prevNumber => prevNumber + 1)
    }
    return (
        <div>
            <h4>useState</h4>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Button variant="outlined" onClick={decrementNumber}>-</Button>
                <span style={{ margin: 30 }}>{number}</span>
                <Button variant="outlined" onClick={incrementNumber}>+</Button>
            </Grid>
        </div>
    )
}