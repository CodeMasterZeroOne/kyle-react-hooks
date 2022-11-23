import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'

export default function DeepCompareEffectComponent() {
    const [age, setAge] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    const useEffectCounterRef = useRef()
    const useDeepCompareEffectCounterRef = useRef()
    const person = { age: age, name: 'Pawel' }

    useEffect(() => {
        useEffectCounterRef.current.textContent =
            parseInt(useEffectCounterRef.current.textContent) + 1
    }, [person])

    useDeepCompareEffect(() => {
        useDeepCompareEffectCounterRef.current.textContent =
            parseInt(useDeepCompareEffectCounterRef.current.textContent) + 1
    }, [person])

    return (
        <>
            <div>useEffect: <span ref={useEffectCounterRef}>0</span></div>
            <div>useDeepCompareEffect: <span ref={useDeepCompareEffectCounterRef}>0</span></div>
            <div>Other Count: {otherCount}</div>
            <div>{JSON.stringify(person)}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setAge(a => a + 1)}>Increment Age</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setOtherCount(c => c + 1)}>Increment Other Count</Button>
        </>
    )
}
