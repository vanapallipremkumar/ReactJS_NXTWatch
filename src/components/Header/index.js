import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

// import icons
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

// import local components
import ThemeContext from '../../context/ThemeContext'
import Logout from '../Logout'
import LinksMenu from '../LinksMenu'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderButtonsContainer,
  HeaderButton,
  LinksButton,
  LinksPopupContainer,
  CloseButton,
  LinksContainer,
  ProfileButton,
  ProfileImage,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, onToggleThemeButton} = value
      const iconColor = darkTheme ? '#ffffff' : '#070705'

      const renderPopupMenu = () => (
        <Popup
          modal
          trigger={
            <LinksButton>
              <GiHamburgerMenu size={30} color={iconColor} />
            </LinksButton>
          }
          className="popup-content"
        >
          {close => (
            <LinksPopupContainer dark={darkTheme}>
              <CloseButton onClick={() => close()}>
                <MdClose size={28} color={iconColor} />
              </CloseButton>
              <LinksContainer>
                <LinksMenu />
              </LinksContainer>
            </LinksPopupContainer>
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
            <HeaderButton onClick={onToggleThemeButton} data-testid="theme">
              {darkTheme ? (
                <FiSun size={26} color={iconColor} />
              ) : (
                <FaMoon size={26} color={iconColor} />
              )}
            </HeaderButton>
            {renderPopupMenu()}
            <ProfileButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <Logout />
          </HeaderButtonsContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
