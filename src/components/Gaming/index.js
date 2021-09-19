import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/ThreeDots'

import {MdWhatshot} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  GamingPageContainer,
  SidebarVideosContainer,
  VideosPageContainer,
  LoaderContainer,
  FailureContainer,
  FailedImage,
  FailedHeading,
  FailedDescription,
  RetryButton,
  VideosListContainer,
  GamingTitleLogoContainer,
  GamingLogoContainer,
  GamingTitle,
} from './styledComponents'

const status = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failed: 'FAILED',
}

class Gaming extends Component {
  state = {
    videosList: [],
    pageStatus: status.loading,
  }

  componentDidMount() {
    this.loadData()
  }

  onSuccessfulFetching = videos => {
    const camelCaseData = videos.map(video => ({
      id: video.id,
      publishedAt: video.published_at,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      viewCount: video.view_count,
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      },
    }))
    this.setState({
      pageStatus: status.success,
      videosList: camelCaseData,
    })
  }

  loadData = async () => {
    this.setState({pageStatus: status.loading})
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.status === 200) {
      const {videos} = data
      this.onSuccessfulFetching(videos)
    } else {
      this.setState({pageStatus: status.failed})
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetryButton = () => {
    this.loadData()
  }

  renderFailureView = dark => (
    <FailureContainer dark={dark}>
      <FailedImage
        src={
          dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailedHeading dark={dark}>Oops! Something Went Wrong</FailedHeading>
      <FailedDescription>
        We are having some trouble to complete your request. Please try again
      </FailedDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderVideosList = dark => {
    const {videosList} = this.state
    return (
      <>
        <GamingTitleLogoContainer dark={dark}>
          <GamingLogoContainer dark={dark}>
            <MdWhatshot size="30" color="#FF031C" />
          </GamingLogoContainer>
          <GamingTitle dark={dark}>Gaming</GamingTitle>
        </GamingTitleLogoContainer>
        <VideosListContainer>
          {videosList.map(video => (
            <VideoItem videoDetails={video} key={video.id} />
          ))}
        </VideosListContainer>
      </>
    )
  }

  renderVideos = dark => {
    const {pageStatus} = this.state
    if (pageStatus === status.loading) {
      return this.renderLoader()
    }
    if (pageStatus === status.failed) {
      return this.renderFailureView(dark)
    }
    return this.renderVideosList(dark)
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <GamingPageContainer>
              <Header />
              <SidebarVideosContainer>
                <Sidebar />
                <VideosPageContainer dark={darkTheme} data-testid="home">
                  {this.renderVideos(darkTheme)}
                </VideosPageContainer>
              </SidebarVideosContainer>
            </GamingPageContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
