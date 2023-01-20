import React from 'react'
import EffectOnceComponent from './EffectOnceComponent'
import GeolocationComponent from './GeolocationComponent'
import MediaQueryComponent from './MediaQueryComponent'
import SizeComponent from './SizeComponent'
import StateWithValidationComponent from './StateWithValidationComponent'

export default function L18customHooks16to20() {
    return (
        <>
            <h4>customHooks16to20</h4>
            <h4>#16 useMediaQuery</h4>
            <MediaQueryComponent />

            <h4>#17 useGeolocation</h4>
            <GeolocationComponent />

            <h4>#18 useStateWithValidation</h4>
            <StateWithValidationComponent />

            <h4>#19 useSize</h4>
            <SizeComponent />

            <h4>#20 useEffectOnce</h4>
            <EffectOnceComponent />
        </>
    )
}
