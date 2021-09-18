import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onToggleThemeButton: () => {},
})

export default ThemeContext
