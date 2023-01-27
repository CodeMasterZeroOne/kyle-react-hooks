import { Button } from '@mui/material'
import React from 'react'
import useToggle from '../L15customHooks1to5/useToggle'
import useRenderCount from './useRenderCount'

export default function RenderCountComponent() {
    const [boolean, toggle] = useToggle(false)

    const renderCount = useRenderCount()
    return (
        <>
            <div>{boolean.toString()}</div>
            <div>{renderCount}</div>
            <Button variant='outlined' onClick={toggle}>toggle</Button>
        </>
    )
}
