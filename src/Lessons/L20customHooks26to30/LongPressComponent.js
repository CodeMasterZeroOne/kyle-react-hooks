import { useRef } from 'react'
import useLongPress from './useLongPress'

export default function LongPressComponent() {
    const elementRef = useRef()
    useLongPress(elementRef, () => alert('Long Pressed'))
    return (
        <div ref={elementRef} style={{ backgroundColor: 'blue', width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }} />
    )
}
