import { Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import ConfirmationModal from './ConfirmationModal'


export default function L12useImperativeHandle() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()
    return (
        <>
            <h4>useImperativeHandle</h4>
            <Button onClick={() => setOpen(true)}>Open</Button>
            <Button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</Button>
            <Button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</Button>
            <Button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</Button>
            <ConfirmationModal ref={modalRef} isOpen={open} onClose={() => setOpen(false)} />
        </>
    )
}
