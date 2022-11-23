import React from 'react'
import AsyncComponent from './AsyncComponent'
import FetchComponent from './FetchComponent'
import PreviousComponent from './PreviousComponent'
import StateWithHistoryComponent from './StateWithHistoryComponent'
import StorageComponent from './StorageComponent'

export default function L16customHooks6to10() {
    return (
        <>
            <h4>customHooks6to10</h4>
            <h4>#6 usePrevious</h4>
            <PreviousComponent />

            <h4>#7 useStateWithHistory</h4>
            <StateWithHistoryComponent />

            <h4>#8 useStorage</h4>
            <StorageComponent />

            <h4>#9 useAsync</h4>
            <AsyncComponent />

            <h4>#10 useFetch</h4>
            <FetchComponent />
        </>
    )
}
