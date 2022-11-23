import React from 'react'
import DeepCompareEffectComponent from './DeepCompareEffectComponent'
import EventListenerComponent from './EventListenerComponent'
import OnScreenComponent from './OnScreenComponent'
import ScriptComponent from './ScriptComponent'
import WindowSizeComponent from './WindowSizeComponent'

export default function L17customHooks11to15() {
    return (
        <>
            <h4>customHooks11to15</h4>
            <h4>#11 useScript</h4>
            <ScriptComponent />

            <h4>#12 useDeepCompareEffect</h4>
            <DeepCompareEffectComponent />

            <h4>#13 useEventListener</h4>
            <EventListenerComponent />

            <h4>#14 useOnScreen</h4>
            <OnScreenComponent />

            <h4>#15 useWindowSize</h4>
            <WindowSizeComponent />
        </>
    )
}
