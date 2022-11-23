import useScript from './useScript'

export default function ScriptComponent() {
    const { loading, error } = useScript('https://code.jquery.com/jquery-3.6.0.min.js')

    if (loading) return <>Loading...</>
    if (error) return <>Error</>
    return <>Window width is: {window.$(window).width()}</>
}
