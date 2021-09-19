// import third party packages
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

// import Context
import ThemeContext from '../../context/ThemeContext'

// import styled components
import {
  LoginPage,
  LoginForm,
  LogoContainer,
  InputFieldContainer,
  InputFieldLabel,
  InputField,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
  Logo,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMessage: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfulLogin(data)
    } else {
      this.onInvalidLogin(data)
    }
  }

  onSuccessfulLogin = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onInvalidLogin = data => this.setState({errorMessage: data.error_msg})

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, errorMessage} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <LoginPage dark={darkTheme}>
              <LoginForm dark={darkTheme} onSubmit={this.onSubmitForm}>
                <LogoContainer>
                  <Logo
                    src={
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </LogoContainer>
                <InputFieldContainer>
                  <InputFieldLabel dark={darkTheme} htmlFor="username">
                    USERNAME
                  </InputFieldLabel>
                  <InputField
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                </InputFieldContainer>
                <InputFieldContainer>
                  <InputFieldLabel dark={darkTheme} htmlFor="password">
                    PASSWORD
                  </InputFieldLabel>
                  <InputField
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                </InputFieldContainer>
                <CheckBoxContainer>
                  <CheckBox
                    id="showPassword"
                    type="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckBoxLabel htmlFor="showPassword" dark={darkTheme}>
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {errorMessage.length !== 0 && (
                  <ErrorMessage>*{errorMessage}</ErrorMessage>
                )}
              </LoginForm>
            </LoginPage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
