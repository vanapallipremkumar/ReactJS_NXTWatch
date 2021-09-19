import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  width: 100%;
  margin: 16px 0 0 0;
`
export const VideoItemLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
  @media (min-width: 576px) {
    width: 40%;
  }
`
export const VideoDetailsContainer = styled.div`
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  @media (min-width: 576px) {
    padding: 0 10px 10px 20px;
  }
`
export const ChannelLogo = styled.img`
  width: 35px;
  margin-right: 6px;
  @media (min-width: 576px) {
    display: none;
  }
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
export const ChannelNameDurationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelNameViewsCount = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'roboto';
`
export const ViewsDurationContainer = styled.div`
  display: flex;
  @media (min-width: 576px) {
    margin: 10px 0 0 0;
  }
`

export const Dot = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #64748b;
  margin: 0 10px;
`
export const Dot1 = styled(Dot)`
  @media (min-width: 576px) {
    display: none;
  }
`
