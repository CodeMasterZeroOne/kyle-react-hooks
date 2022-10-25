import { Button } from '@mui/material'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function L10useLayoutEffect() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const popup = useRef()
    const button = useRef()
    const popup1 = useRef()
    const button1 = useRef()
    useEffect(() => {
        setShow2(show1)
        return () => { }
    }, [show1])

    useEffect(() => {
        if (popup1.current == null || button1.current == null) return
        const { bottom } = button1.current.getBoundingClientRect()
        popup1.current.style.top = `${bottom + 25}px`
        return () => { }
    }, [show2])

    // its not async function!!
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
        return () => { }
    }, [show])

    return (
        <>
            <h4>useLayoutEffect</h4>
            <Button ref={button} onClick={() => setShow(prev => !prev)}>Click here</Button>
            {show && (
                <div ref={popup} style={{ position: 'absolute' }}>
                    This popup drops by 25px then renders
                </div>
            )}
            <br /><br /><br /><br />
            <h4>useEffect</h4>
            <Button ref={button1} onClick={() => setShow1(prev => !prev)}>Click here</Button>
            {show1 && (
                <div ref={popup1} style={{ position: 'absolute' }}>
                    This popup renders and drops by 25px
                </div>
            )}
        </>
    )
}
