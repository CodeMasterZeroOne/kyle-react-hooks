import { useEffect } from 'react'

export default function useEffectOnce(callb) {
    useEffect(callb, [])
}
