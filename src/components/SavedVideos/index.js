import {Component} from 'react'

// import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'

import {
  SavedVideosPageContainer,
  SidebarVideosContainer,
} from './styledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <SavedVideosPageContainer>
        <Header />
        <SidebarVideosContainer>
          <Sidebar />
        </SidebarVideosContainer>
      </SavedVideosPageContainer>
    )
  }
}

export default SavedVideos
