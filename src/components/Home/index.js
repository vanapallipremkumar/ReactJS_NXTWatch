import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/ThreeDots'

import {AiOutlineSearch} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../SideBar'
import Banner from '../Banner'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomePageContainer,
  SidebarVideosContainer,
  VideosPageContainer,
  VideosSearchContainer,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  FailureNotFoundContainer,
  FailedNotFoundImage,
  FailedNotFoundHeading,
  FailedNotFoundDescription,
  RetryButton,
  VideosListContainer,
} from './styledComponents'

const status = {
  success: 'SUCCESS',
  loading: 'LOADING',
  failed: 'FAILED',
  noVideos: 'NOVIDEOS',
}

class Home extends Component {
  state = {
    videosList: [],
    showBanner: true,
    pageStatus: status.loading,
    search: '',
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
    const {search} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }

    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()
    if (response.status === 200) {
      const {videos} = data
      if (videos.length === 0) {
        this.setState({pageStatus: status.noVideos})
      } else {
        this.onSuccessfulFetching(videos)
      }
    } else {
      this.setState({pageStatus: status.failed})
    }
  }

  onClickCloseButton = () => {
    this.setState({showBanner: false})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickSearchButton = () => {
    this.loadData()
  }

  renderSearchBar = dark => {
    const {search} = this.state
    return (
      <SearchBarContainer>
        <SearchInput
          type="search"
          value={search}
          onChange={this.onChangeSearch}
          placeholder="Search"
          dark={dark}
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchButton}
          dark={dark}
          data-testid="searchButton"
        >
          <AiOutlineSearch color={dark ? '#565554' : '#777777'} />
        </SearchButton>
      </SearchBarContainer>
    )
  }

  renderLoader = () => (
    <VideosContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </VideosContainer>
  )

  onClickRetryButton = () => {
    this.loadData()
  }

  renderNoVideosView = dark => (
    <FailureNotFoundContainer dark={dark}>
      <FailedNotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailedNotFoundHeading dark={dark}>
        No Search results found
      </FailedNotFoundHeading>
      <FailedNotFoundDescription>
        Try different key words or remove search filter
      </FailedNotFoundDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureNotFoundContainer>
  )

  renderFailureView = dark => (
    <FailureNotFoundContainer dark={dark}>
      <FailedNotFoundImage
        src={
          dark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailedNotFoundHeading dark={dark}>
        Oops! Something Went Wrong
      </FailedNotFoundHeading>
      <FailedNotFoundDescription>
        We are having some trouble to complete your request. Please try again
      </FailedNotFoundDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureNotFoundContainer>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(video => (
          <HomeVideoItem videoDetails={video} key={video.id} />
        ))}
      </VideosListContainer>
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
    if (pageStatus === status.noVideos) {
      return this.renderNoVideosView(dark)
    }
    return this.renderVideosList()
  }

  render() {
    const {showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <HomePageContainer dark={darkTheme} data-testid="home">
              <Header />
              <SidebarVideosContainer>
                <Sidebar />
                <VideosPageContainer dark={darkTheme}>
                  {showBanner && (
                    <Banner onClickCloseButton={this.onClickCloseButton} />
                  )}
                  <VideosSearchContainer>
                    {this.renderSearchBar(darkTheme)}
                    {this.renderVideos(darkTheme)}
                  </VideosSearchContainer>
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
