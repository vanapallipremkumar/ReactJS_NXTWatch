import './App.css'

// import third party packages
import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

// import context
import ThemeContext from './context/ThemeContext'

// import local files packages
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideosIds: [],
    likedVideosIds: [],
    dislikedVideosIds: [],
  }

  onToggleThemeButton = () =>
    this.setState(previousState => ({
      darkTheme: !previousState.darkTheme,
    }))

  onClickSaveButton = id => {
    const {savedVideosIds} = this.state
    const savedVideoIdExists = savedVideosIds.includes(id)
    if (savedVideoIdExists) {
      this.setState(previousState => ({
        savedVideosIds: previousState.savedVideosIds.filter(
          savedVideoId => savedVideoId !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        savedVideosIds: [...previousState.savedVideosIds, id],
      }))
    }
  }

  onClickLikeButton = id => {
    const {likedVideosIds} = this.state
    const likedVideoIdExists = likedVideosIds.includes(id)
    if (likedVideoIdExists) {
      this.setState(previousState => ({
        likedVideosIds: previousState.likedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        likedVideosIds: [...previousState.likedVideosIds, id],
        dislikedVideosIds: previousState.dislikedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    }
  }

  onClickDislikeButton = id => {
    const {dislikedVideosIds} = this.state
    const dislikedVideoIdExists = dislikedVideosIds.includes(id)
    if (dislikedVideoIdExists) {
      this.setState(previousState => ({
        dislikedVideosIds: previousState.dislikedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        dislikedVideosIds: [...previousState.dislikedVideosIds, id],
        likedVideosIds: previousState.likedVideosIds.filter(
          likedVideoId => likedVideoId !== id,
        ),
      }))
    }
  }

  render() {
    const {
      darkTheme,
      savedVideosIds,
      likedVideosIds,
      dislikedVideosIds,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onToggleThemeButton: this.onToggleThemeButton,

          savedVideosIds,
          onClickSaveButton: this.onClickSaveButton,

          likedVideosIds,
          onClickLikeButton: this.onClickLikeButton,

          dislikedVideosIds,
          onClickDislikeButton: this.onClickDislikeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/trending" component={Trending} />
          <ProtectedRoute exact path="/videos/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/saved-videos"
            component={SavedVideos}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
