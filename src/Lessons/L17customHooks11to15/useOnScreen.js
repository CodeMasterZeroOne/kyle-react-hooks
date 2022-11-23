import { useState } from 'react'
import { useEffect } from 'react'

export default function useOnScreen(ref, rootMargin = '0px') {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        var currentRef = ref.current
        console.log(currentRef)
        if (currentRef == null) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.observe(currentRef)
        return () => {
            if (currentRef == null) return
            observer.unobserve(currentRef)
        }
    }, [ref, rootMargin])

    return isVisible
}
