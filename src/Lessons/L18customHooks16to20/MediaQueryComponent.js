import useMediaQuery from './useMediaQuery'

export default function MediaQueryComponent() {
    const isLarge = useMediaQuery("(min-width: 2000px)")

    return <div>Large: {isLarge.toString()}</div>
}
