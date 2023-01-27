import React from 'react'
// import CarouselComponent from '../../Components/CarouselComponent'
import DebugInformationComponent from './DebugInformationComponent'
import HoverComponent from './HoverComponent'
import LongPressComponent from './LongPressComponent'
import OnlineStatusComponent from './OnlineStatusComponent'
import RenderCountComponent from './RenderCountComponent'

export default function L20customHooks26to30() {
    return (
        <div>

            {/* <CarouselComponent /> */}

            <h4>customHooks26to30</h4>
            <h4>#26 useOnlineStatus</h4>
            <OnlineStatusComponent />

            <h4>#27 useRenderCount</h4>
            <RenderCountComponent />

            <h4>#28 useDebugInformation</h4>
            <DebugInformationComponent />

            <h4>#29 useHover</h4>
            <HoverComponent />

            <h4>#30 useLongPress</h4>
            <LongPressComponent />

        </div>
    )
}