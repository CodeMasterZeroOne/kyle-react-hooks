import { Button } from '@mui/material'
import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

export default function FunctionContextComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <Button variant="outlined" onClick={toggleTheme}>Toggle Theme</Button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}