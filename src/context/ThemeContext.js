import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onToggleThemeButton: () => {},

  savedVideosIds: [],
  onClickSaveButton: () => {},

  likedVideosIds: [],
  onClickLikeButton: () => {},

  dislikedVideosIds: [],
  onClickDislikeButton: () => {},
})

export default ThemeContext
