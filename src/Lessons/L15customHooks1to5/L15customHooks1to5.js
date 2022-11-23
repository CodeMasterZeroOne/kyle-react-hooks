import React from 'react'
import ArrayComponent from './ArrayComponent'
import DebounceComponent from './DebounceComponent'
import TimeoutComponent from './TimeoutComponent'
import ToggleComponent from './ToggleComponent'
import UpdateEffectComponent from './UpdateEffectComponent'

export default function L15customHooks1to5() {
    return (
        <>
            <h4>customHooks1to5</h4>
            <h4>#1 useToggle</h4>
            <ToggleComponent />

            <h4>#2 useTimeout</h4>
            <TimeoutComponent />

            <h4>#3 useDebounce</h4>
            <DebounceComponent />

            <h4>#4 useUpdateEffect</h4>
            <UpdateEffectComponent />

            <h4>#5 useArray</h4>
            <ArrayComponent />
        </>
    )
}
