import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  onToggleThemeButton: () => {},

  savedVideos: [],
  onClickSaveButton: () => {},

  likedVideosIds: [],
  onClickLikeButton: () => {},

  dislikedVideosIds: [],
  onClickDislikeButton: () => {},
})

export default ThemeContext
