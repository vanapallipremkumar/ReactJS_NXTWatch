import styled from 'styled-components'

export default null

export const HeaderContainer = styled.nav`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
  @media (min-width: 768px) {
    padding: 16px 40px;
  }
`
export const HeaderLogo = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 150px;
  }
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 20px;
  padding: 0;
`
export const LinksButton = styled(HeaderButton)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LinksPopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
`
export const CloseButton = styled(HeaderButton)`
  margin: 40px 30px;
  align-self: flex-end;
`
export const LinksContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
export const ProfileButton = styled(HeaderButton)`
  width: 30px;
  height: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 100%;
`
