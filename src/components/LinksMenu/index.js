import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeContext from '../../context/ThemeContext'

import {LinkContainer, LinkName, MenuLink} from './styledComponent'

const links = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVEDVIDEOS',
}

const LinksMenu = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, activeLinkId, onChangeActiveLinkId} = value

      const getBackgroundColor = active => {
        let textColor = ''
        if (active && darkTheme) {
          textColor = '#383838'
        } else if (!active && darkTheme) {
          textColor = 'transparent'
        } else if (active && !darkTheme) {
          textColor = '#F1F5F9'
        } else {
          textColor = 'transparent'
        }
        return textColor
      }

      const getTextColor = active => {
        let textColor = ''
        if (active && darkTheme) {
          textColor = '#ffffff'
        } else if (!active && darkTheme) {
          textColor = '#C4C5C6'
        } else if (active && !darkTheme) {
          textColor = '#1D2A3B'
        } else {
          textColor = '#7B838C'
        }
        return textColor
      }

      const getIconColor = active => (active ? '#ff0000' : '#606060')

      const onClickHomeLink = () => onChangeActiveLinkId('HOME')

      const onClickTrendingLink = () => onChangeActiveLinkId('TRENDING')

      const onClickGamingLink = () => onChangeActiveLinkId('GAMING')

      const onClickSavedVideosLink = () => onChangeActiveLinkId('SAVEDVIDEOS')

      const renderHomeLink = () => {
        const active = activeLinkId === links.home
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor} onClick={onClickHomeLink}>
            <MenuLink to="/">
              <AiFillHome size="16" color={iconColor} />
              <LinkName color={textColor}>Home</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderTrendingLink = () => {
        const active = activeLinkId === links.trending
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor} onClick={onClickTrendingLink}>
            <MenuLink to="/trending">
              <MdWhatshot size="16" color={iconColor} />
              <LinkName color={textColor}>Trending</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderGamingLink = () => {
        const active = activeLinkId === links.gaming
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor} onClick={onClickGamingLink}>
            <MenuLink to="/gaming">
              <SiYoutubegaming size="16" color={iconColor} />
              <LinkName color={textColor}>Gaming</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }

      const renderSavedVideosLink = () => {
        const active = activeLinkId === links.savedVideos
        const bgColor = getBackgroundColor(active)
        const iconColor = getIconColor(active)
        const textColor = getTextColor(active)
        return (
          <LinkContainer bgColor={bgColor} onClick={onClickSavedVideosLink}>
            <MenuLink to="/saved-videos">
              <MdPlaylistAdd size="16" color={iconColor} />
              <LinkName color={textColor}>Saved videos</LinkName>
            </MenuLink>
          </LinkContainer>
        )
      }
      return (
        <>
          {renderHomeLink()}
          {renderTrendingLink()}
          {renderGamingLink()}
          {renderSavedVideosLink()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default LinksMenu
