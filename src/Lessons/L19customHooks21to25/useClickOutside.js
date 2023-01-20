import useEventListener from '../L17customHooks11to15/useEventListener'

export default function useClickOutside(ref, callb) {
    useEventListener('click', e => {
        if (ref.current == null || ref.current.contains(e.target)) return
        callb(e)
    }, document)
}
