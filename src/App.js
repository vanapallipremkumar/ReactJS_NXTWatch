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

// Replace your code here
class App extends Component {
  state = {darkTheme: false}

  onToggleThemeButton = () =>
    this.setState(previousState => ({
      darkTheme: !previousState.darkTheme,
    }))

  render() {
    const {darkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          onToggleThemeButton: this.onToggleThemeButton,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
