import ThemeContext from '../../context/ThemeContext'

import {
  SidebarContainer,
  LinksContainer,
  ContactUsContainer,
  ContactUsHeading,
  ContactUsWebsitesContainer,
  ContactUsWebsiteImage,
  ContactUsDescription,
} from './styledComponents'

import LinksMenu from '../LinksMenu'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme} = value
      return (
        <SidebarContainer dark={darkTheme}>
          <LinksContainer>
            <LinksMenu />
          </LinksContainer>
          <ContactUsContainer>
            <ContactUsHeading dark={darkTheme}>CONTACT US</ContactUsHeading>
            <ContactUsWebsitesContainer>
              <ContactUsWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsWebsitesContainer>
            <ContactUsDescription dark={darkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
