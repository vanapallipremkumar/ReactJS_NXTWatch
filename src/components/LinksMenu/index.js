import {Component} from 'react'

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

class LinksMenu extends Component {
  state = {activeLinkID: 'HOME'}

  getBackgroundColor = (active, dark) => {
    let textColor = ''
    if (active && dark) {
      textColor = '#383838'
    } else if (!active && dark) {
      textColor = 'transparent'
    } else if (active && !dark) {
      textColor = '#F1F5F9'
    } else {
      textColor = 'transparent'
    }
    return textColor
  }

  getIconColor = active => (active ? '#ff0000' : '#606060')

  getTextColor = (active, dark) => {
    let textColor = ''
    if (active && dark) {
      textColor = '#ffffff'
    } else if (!active && dark) {
      textColor = '#C4C5C6'
    } else if (active && !dark) {
      textColor = '#1D2A3B'
    } else {
      textColor = '#7B838C'
    }
    return textColor
  }

  onClickHomeLink = () => this.setState({activeLinkID: 'HOME'})

  onClickTrendingLink = () => this.setState({activeLinkID: 'TRENDING'})

  onClickGamingLink = () => this.setState({activeLinkID: 'GAMING'})

  onClickSavedVideosLink = () => this.setState({activeLinkID: 'SAVEDVIDEOS'})

  renderHomeLink = dark => {
    const {activeLinkID} = this.state
    const active = activeLinkID === links.home
    const bgColor = this.getBackgroundColor(active, dark)
    const iconColor = this.getIconColor(active, dark)
    const textColor = this.getTextColor(active, dark)
    return (
      <LinkContainer bgColor={bgColor} onClick={this.onClickHomeLink}>
        <MenuLink to="/">
          <AiFillHome size="16" color={iconColor} />
          <LinkName color={textColor}>Home</LinkName>
        </MenuLink>
      </LinkContainer>
    )
  }

  renderTrendingLink = dark => {
    const {activeLinkID} = this.state
    const active = activeLinkID === links.trending
    const bgColor = this.getBackgroundColor(active, dark)
    const iconColor = this.getIconColor(active, dark)
    const textColor = this.getTextColor(active, dark)
    return (
      <LinkContainer bgColor={bgColor} onClick={this.onClickTrendingLink}>
        <MenuLink to="/trending">
          <MdWhatshot size="16" color={iconColor} />
          <LinkName color={textColor}>Trending</LinkName>
        </MenuLink>
      </LinkContainer>
    )
  }

  renderGamingLink = dark => {
    const {activeLinkID} = this.state
    const active = activeLinkID === links.gaming
    const bgColor = this.getBackgroundColor(active, dark)
    const iconColor = this.getIconColor(active, dark)
    const textColor = this.getTextColor(active, dark)
    return (
      <LinkContainer bgColor={bgColor} onClick={this.onClickGamingLink}>
        <MenuLink to="/gaming">
          <SiYoutubegaming size="16" color={iconColor} />
          <LinkName color={textColor}>Gaming</LinkName>
        </MenuLink>
      </LinkContainer>
    )
  }

  renderSavedVideosLink = dark => {
    const {activeLinkID} = this.state
    const active = activeLinkID === links.savedVideos
    const bgColor = this.getBackgroundColor(active, dark)
    const iconColor = this.getIconColor(active, dark)
    const textColor = this.getTextColor(active, dark)
    return (
      <LinkContainer bgColor={bgColor} onClick={this.onClickSavedVideosLink}>
        <MenuLink to="/saved-videos">
          <MdPlaylistAdd size="16" color={iconColor} />
          <LinkName color={textColor}>Saved videos</LinkName>
        </MenuLink>
      </LinkContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              {this.renderHomeLink(darkTheme)}
              {this.renderTrendingLink(darkTheme)}
              {this.renderGamingLink(darkTheme)}
              {this.renderSavedVideosLink(darkTheme)}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LinksMenu
