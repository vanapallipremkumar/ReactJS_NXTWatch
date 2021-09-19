import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemContainer,
  VideoItemLink,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoTitleContainer,
  VideoTitle,
  ChannelNameViewsCount,
  Dot,
  Dot1,
  ChannelNameDurationContainer,
  ViewsDurationContainer,
} from './styledComponents'

const getFormattedDate = date => {
  const duration = formatDistanceToNow(new Date(date)).split(' ')
  return `${duration[duration.length - 2]} ${duration[duration.length - 1]} ago`
}

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails

  const duration = getFormattedDate(publishedAt)
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemContainer>
            <VideoItemLink to={`/videos/${id}`}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoTitleContainer>
                  <VideoTitle dark={darkTheme}>{title}</VideoTitle>
                  <ChannelNameDurationContainer>
                    <ChannelNameViewsCount>{name}</ChannelNameViewsCount>
                    <Dot1>.</Dot1>
                    <ViewsDurationContainer>
                      <ChannelNameViewsCount>{`${viewCount} views`}</ChannelNameViewsCount>
                      <Dot>.</Dot>
                      <ChannelNameViewsCount>{`${duration}`}</ChannelNameViewsCount>
                    </ViewsDurationContainer>
                  </ChannelNameDurationContainer>
                </VideoTitleContainer>
              </VideoDetailsContainer>
            </VideoItemLink>
          </VideoItemContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoItem
