import useAsync from '../L16customHooks5to10/useAsync'

export default function useScript(url) {
    return useAsync(() => {
        const script = document.createElement('script')
        script.src = url
        script.async = true

        return new Promise((resolve, reject) => {
            script.addEventListener('load', resolve)
            script.addEventListener('error', reject)
            document.body.appendChild(script)
        })
    }, [url])
}
