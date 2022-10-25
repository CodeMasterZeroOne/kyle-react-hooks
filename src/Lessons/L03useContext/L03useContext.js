import React, { createContext } from "react"
import FunctionContextComponent from "./FunctionContextComponent"
import { ThemeProvider } from "./ThemeContext"

export const ThemeContext = createContext()

export default function L03useContext() {

    return (
        <ThemeProvider>
            <h4>useContext</h4>

            <FunctionContextComponent />

        </ThemeProvider>
    )
}