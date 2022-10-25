import React, { TextField } from '@mui/material'
import useLocalStorage from './useLocalStorage'
// import useUpdateLogger from './useUpdateLogger'

export default function L14localStorage() {
    const [name, setName] = useLocalStorage('name', '')
    // useUpdateLogger(name)

    return (
        <>
            <h4>useLocalStorage</h4>
            <TextField value={name} label='Name' onChange={e => setName(e.target.value)} />
        </>
    )
}
