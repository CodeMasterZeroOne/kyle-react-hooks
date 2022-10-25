import React from 'react'
import { useId } from 'react'
// import { TextField } from '@mui/material'

export default function Email() {
    const id = useId()
    return (
        <>
            {/* <TextField id={`${id}Emailski`} type='email' label='Email' />
            <br />
            <TextField id={`${id}Nameski`} type='text' label='Name' />
            <br /> */}
            <label htmlFor={`${id}Email`}>Email:</label>
            <input id={`${id}Email`} type='email' />
            <br />
            <label htmlFor={`${id}Name`}>Name:</label>
            <input id={`${id}Name`} type='text' />
        </>
    )
}
