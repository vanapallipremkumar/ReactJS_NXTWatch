import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'
import Banner from '../Banner'

import {
  HomePageContainer,
  SidebarVideosContainer,
  VideosPageContainer,
} from './styledComponents'

class Home extends Component {
  state = {showBanner: true}

  onClickCloseButton = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomePageContainer>
              <Header />
              <SidebarVideosContainer>
                <Sidebar />
                <VideosPageContainer dark={darkTheme} data-testid="home">
                  {showBanner && (
                    <Banner onClickCloseButton={this.onClickCloseButton} />
                  )}
                </VideosPageContainer>
              </SidebarVideosContainer>
            </HomePageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
