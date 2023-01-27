import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import useClickOutside from './useClickOutside'

export default function ClickOutsideComponent() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
        // setOpen(!open)
    })

    return (
        <>
            <Button variant='contained' onClick={() => setOpen(true)}>Open</Button>
            <div
                ref={modalRef}
                style={{
                    display: open ? 'block' : 'none',
                    backgroundColor: 'blue',
                    color: 'white',
                    width: '300px',
                    height: '200px',
                    position: 'absolute',
                    top: 'calc(50%-50px)',
                    left: 'calc(50%-50px)'
                }}
            >
                <span>Modal</span>
            </div>
        </>
    )
}
