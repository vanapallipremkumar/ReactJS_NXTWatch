import styled from 'styled-components'

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SidebarVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
export const VideosPageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`
