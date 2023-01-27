import useEventListener from '../L17customHooks11to15/useEventListener'
import useEffectOnce from '../L18customHooks16to20/useEffectOnce'
import useTimeout from '../L15customHooks1to5/useTimeout'

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
    const { reset, clear } = useTimeout(cb, delay)
    useEffectOnce(clear)

    useEventListener('mousedown', reset, ref.current)
    useEventListener('touchstart', reset, ref.current)
    useEventListener('mouseup', clear, ref.current)
    useEventListener('mouseleave', clear, ref.current)
    useEventListener('touchend', clear, ref.current)

}
