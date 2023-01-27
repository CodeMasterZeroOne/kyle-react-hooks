import { useState } from 'react'
import useEventListener from '../L17customHooks11to15/useEventListener'

export default function useHover(ref) {
    const [hovered, setHovered] = useState(false)

    useEventListener('mouseover', () => setHovered(true), ref.current)
    useEventListener('mouseout', () => setHovered(false), ref.current)

    return hovered
}
