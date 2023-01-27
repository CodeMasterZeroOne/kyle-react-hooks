import moment from 'moment/moment'
import { useEffect } from 'react'
import { useRef } from 'react'
import useRenderCount from './useRenderCount'

export default function useDebugInformation(componentName, props) {
    const count = useRenderCount()
    const changedProps = useRef({})
    const previousProps = useRef(props)
    const lastRenderTimestamp = useRef(moment())
    // const lastRenderTimestamp = useRef(Date.now())
    const propKeys = Object.keys({ ...props, ...previousProps })
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj
        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] }
        }
    }, {})

    const info = {
        count,
        changedProps: changedProps.current,
        timeSinceLastRender: `${moment.duration(moment().diff(lastRenderTimestamp.current)).years()}Y:${moment.duration(moment().diff(lastRenderTimestamp.current)).months()}M:${moment.duration(moment().diff(lastRenderTimestamp.current)).days()}D / ${moment.duration(moment().diff(lastRenderTimestamp.current)).hours()}h:${moment.duration(moment().diff(lastRenderTimestamp.current)).minutes()}m:${moment.duration(moment().diff(lastRenderTimestamp.current)).seconds()}s:${moment.duration(moment().diff(lastRenderTimestamp.current)).milliseconds()}`,
        lastRenderTimestamp: lastRenderTimestamp.current
    }

    useEffect(() => {
        previousProps.current = props
        lastRenderTimestamp.current = moment().format('DD MMM YYYY HH:mm:ss')
        console.log('[debug-info]', componentName, info)
    })

    return info
}
