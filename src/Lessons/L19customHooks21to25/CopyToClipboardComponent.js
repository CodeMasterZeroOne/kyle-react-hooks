import { Button, TextField } from '@mui/material'
import React from 'react'
import useCopyToClipboard from './useCopyToClipboard'

export default function CopyToClipboardComponent() {
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <>
            <Button variant='outlined' sx={{ margin: 1 }} onClick={() => copyToClipboard('This was copied')}>
                {success ? 'Copied' : 'Copy Text'}
            </Button>
            <TextField size='small' sx={{ margin: 1 }}></TextField>
        </>
    )
}
