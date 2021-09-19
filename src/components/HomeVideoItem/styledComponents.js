import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  width: 100%;
  margin: 16px 0 0 0;
  @media (min-width: 576px) {
    width: 48.5%;
  }
  @media (min-width: 768px) {
    width: 32%;
  }
`
export const VideoItemLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  width: 35px;
  margin-right: 6px;
`
export const VideoTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  color: ${props => (props.dark ? '#f9f9f9' : '#1e293b')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'roboto';
  margin: 0 0 10px 0;
  line-height: 1.5;
`
export const ChannelNameViewsCount = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'roboto';
  margin: 0 0 10px 0;
`
export const Dot = styled.span`
  font-size: 26px;
  font-weight: bold;
  color: #64748b;
`
