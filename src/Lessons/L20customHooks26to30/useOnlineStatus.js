import { useState } from 'react'
import useEventListener from '../L17customHooks11to15/useEventListener'
export default function useOnlineStatus() {
    const [online, setOnline] = useState(navigator.onLine)

    useEventListener('online', () => setOnline(navigator.onLine))
    useEventListener('offline', () => setOnline(navigator.onLine))
    return online
}
