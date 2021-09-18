import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onToggleThemeButton: () => {},

  activeLinkId: 'HOME',
  onChangeActiveLinkId: () => {},
})

export default ThemeContext
