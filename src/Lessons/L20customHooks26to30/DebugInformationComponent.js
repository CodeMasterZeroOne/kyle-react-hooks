import { Button } from '@mui/material'
import React, { useState } from 'react'
import useToggle from '../L15customHooks1to5/useToggle'
import useDebugInformation from './useDebugInformation'

export default function DebugInformationComponent() {
    const [boolean, toggle] = useToggle(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent boolean={boolean} count={count} />
            <Button variant='outlined' onClick={toggle}>Toggle</Button>
            <Button variant='outlined' onClick={() => setCount(prevCount => prevCount + 1)}>Increment</Button>
        </>
    )
}

function ChildComponent(props) {
    const info = useDebugInformation('ChildComponent', props)

    return (
        <>
            <div>{props.boolean.toString()}</div>
            <div>{props.count}</div>
            <div>{JSON.stringify(info, null, 2)}</div>
        </>
    )
}