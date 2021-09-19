import './App.css'

// import third party packages
import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

// import context
import ThemeContext from './context/ThemeContext'

// import local files packages
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
    likedVideosIds: [],
    dislikedVideosIds: [],
  }

  onToggleThemeButton = () =>
    this.setState(previousState => ({
      darkTheme: !previousState.darkTheme,
    }))

  onClickSaveButton = videoDetails => {
    const {id} = videoDetails
    const {savedVideos} = this.state
    const savedVideoExists =
      savedVideos.find(savedVideo => savedVideo.id === id) !== undefined
    if (savedVideoExists) {
      this.setState(previousState => ({
        savedVideos: previousState.savedVideos.filter(
          savedVideo => savedVideo.id !== id,
        ),
      }))
    } else {
      this.setState(previousState => ({
        savedVideos: [...previousState.savedVideos, videoDetails],
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
      savedVideos,
      likedVideosIds,
      dislikedVideosIds,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onToggleThemeButton: this.onToggleThemeButton,

          savedVideos,
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
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
