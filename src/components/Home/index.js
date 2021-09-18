import {Component} from 'react'

// import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'

import {HomePageContainer, SidebarVideosContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomePageContainer>
        <Header />
        <SidebarVideosContainer>
          <Sidebar />
        </SidebarVideosContainer>
      </HomePageContainer>
    )
  }
}

export default Home
