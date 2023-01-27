import React, { useRef } from 'react'
import useHover from './useHover'

export default function HoverComponent() {
    const elementRef = useRef()
    const hovered = useHover(elementRef)

    return (
        <div ref={elementRef} style={{
            backgroundColor: hovered ? 'red' : 'blue',
            width: 100,
            height: 100,
            marginLeft: 'auto',
            marginRight: 'auto',
        }} />
    )
}
