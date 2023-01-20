import React from 'react'
import { TextField } from '@mui/material'
import useStateWithValidation from './useStateWithValidation'

export default function StateWithValidationComponent() {
    const [username, setUsername, isValid] = useStateWithValidation(
        name => name.length > 5,
        ''
    )

    return (
        <>
            <div>More than five makes it Valid: {isValid.toString()}</div>
            <TextField
                autoComplete='false'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </>
    )
}
