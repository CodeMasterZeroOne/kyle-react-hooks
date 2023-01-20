import { useEffect, useState } from 'react'
import useEventListener from '../L17customHooks11to15/useEventListener'

export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false)
    //const [mediaQueryList, setMediaQueryList] = useState(null)
    const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia(mediaQuery))

    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)

        return () => { }
    }, [mediaQuery])

    useEventListener('change', e => setIsMatch(e.matches), mediaQueryList)

    return isMatch
}
