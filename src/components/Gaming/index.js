import {Component} from 'react'

// import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'

import {GamingPageContainer, SidebarVideosContainer} from './styledComponents'

class Gaming extends Component {
  render() {
    return (
      <GamingPageContainer>
        <Header />
        <SidebarVideosContainer>
          <Sidebar />
        </SidebarVideosContainer>
      </GamingPageContainer>
    )
  }
}

export default Gaming
