import { useEffect } from 'react'
import useLocalStorage from '../L14localStorage/useLocalStorage'
import useMediaQuery from '../L18customHooks16to20/useMediaQuery'

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('useDarkMode', false)
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const enabled = darkMode ?? prefersDarkMode

    useEffect(() => {
        document.body.classList.toggle('dark-mode', enabled)

        return () => { }
    }, [enabled])

    return [enabled, setDarkMode]
}
