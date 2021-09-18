import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

// import icons
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

// import local components
import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderButtonsContainer,
  HeaderButton,
  LogoutContainer,
  LogoutMessage,
  PopupButtonsContainer,
  PopupButton,
  PopupOutlineButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, onToggleThemeButton} = value
      const iconSize = 24
      const iconColor = darkTheme ? '#ffffff' : '#070705'
      const overlayStyle = {background: 'rgba(0,0,0,0.5)'}
      const onClickLogoutConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const renderLogoutPopup = () => (
        <Popup
          modal
          trigger={
            <HeaderButton type="button">
              <FiLogOut size={iconSize} color={iconColor} />
            </HeaderButton>
          }
          overlayStyle={overlayStyle}
        >
          {close => (
            <LogoutContainer dark={darkTheme}>
              <LogoutMessage dark={darkTheme}>
                Are you sure you want to logout?
              </LogoutMessage>
              <PopupButtonsContainer>
                <PopupOutlineButton type="button" onClick={() => close()}>
                  Cancel
                </PopupOutlineButton>
                <PopupButton type="button" onClick={onClickLogoutConfirm}>
                  Confirm
                </PopupButton>
              </PopupButtonsContainer>
            </LogoutContainer>
          )}
        </Popup>
      )

      return (
        <HeaderContainer dark={darkTheme}>
          <Link to="/">
            <HeaderLogo
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderButtonsContainer>
            <HeaderButton onClick={onToggleThemeButton}>
              {darkTheme ? (
                <FiSun size={iconSize} color={iconColor} />
              ) : (
                <FaMoon size={iconSize} color={iconColor} />
              )}
            </HeaderButton>
            <HeaderButton>
              <GiHamburgerMenu size={iconSize} color={iconColor} />
            </HeaderButton>
            {renderLogoutPopup()}
          </HeaderButtonsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
