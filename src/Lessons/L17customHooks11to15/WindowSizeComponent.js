import React from 'react'
import useWindowSize from './useWindowSize'

export default function WindowSizeComponent() {
    const { width, height } = useWindowSize()

    return (
        <>
            {width}x{height}
        </>
    )
}
