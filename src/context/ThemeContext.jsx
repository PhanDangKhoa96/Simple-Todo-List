import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false)

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider