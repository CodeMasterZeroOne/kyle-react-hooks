import { Button } from '@mui/material'
import React from 'react'
import useDarkMode from './useDarkMode'
// import '../../darkModeBody.css'

export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <Button variant='outlined' onClick={() => setDarkMode(prevMode => !prevMode)}
            style={{
                border: `1px solid ${darkMode ? 'white' : 'black'}`,
                color: darkMode ? 'white' : 'black'
            }}
        >
            {darkMode ? 'Want Light Mode?' : 'Want Dark Mode?'}
        </Button>
    )
}
