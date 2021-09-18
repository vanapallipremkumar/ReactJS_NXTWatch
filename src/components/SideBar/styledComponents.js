import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 30%;
  max-width: 350px;
  height: 100%;
  padding: 20px 0;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  display: none;
`
export const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`
export const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 20px;
`
export const ContactUsHeading = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.dark ? '#f9f9f9' : '#2D4D70')};
`
export const ContactUsWebsitesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 16px 0;
`
export const ContactUsWebsiteImage = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const ContactUsDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.dark ? '#f9f9f9' : '#2D4D70')};
  line-height: 1.5;
`