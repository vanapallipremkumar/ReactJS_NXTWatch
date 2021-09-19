import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'

// import local components
import ThemeContext from '../../context/ThemeContext'

// import style components
import {
  LogoutContainer,
  LogoutMessage,
  PopupButtonsContainer,
  PopupButton,
  PopupOutlineButton,
  LogoutButton,
  LogoutIconContainer,
  LogoutText,
} from './styledComponents'

const Logout = props => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      const iconSize = 26
      const iconColor = darkTheme ? '#ffffff' : '#070705'
      const overlayStyle = {background: 'rgba(0,0,0,0.5)'}
      const onClickLogoutConfirm = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Popup
          modal
          trigger={
            <LogoutButton type="button" dark={darkTheme}>
              <LogoutIconContainer>
                <FiLogOut size={iconSize} color={iconColor} />
              </LogoutIconContainer>
              <LogoutText dark={darkTheme}>Logout</LogoutText>
            </LogoutButton>
          }
          className="popup-content"
          overlayStyle={overlayStyle}
        >
          {close => (
            <LogoutContainer dark={darkTheme}>
              <LogoutMessage dark={darkTheme}>
                Are you sure, you want to logout?
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
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Logout)
