import {Component} from 'react'

// import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'

import {TrendingPageContainer, SidebarVideosContainer} from './styledComponents'

class Trending extends Component {
  render() {
    return (
      <TrendingPageContainer>
        <Header />
        <SidebarVideosContainer>
          <Sidebar />
        </SidebarVideosContainer>
      </TrendingPageContainer>
    )
  }
}

export default Trending
