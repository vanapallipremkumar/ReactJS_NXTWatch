import styled from 'styled-components'

export default null

export const HeaderContainer = styled.div`
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
  margin-left: 10px;
`
export const HeaderButton = styled.button`
  width: 26px;
  height: 26px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 0 0 10px;
`

export const LogoutContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => (props.dark ? '#212121' : '#FFFFFF')};
`
export const LogoutMessage = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.dark ? '#ffffff' : '#39628F')};
  margin: 0 0 16px 0;
`
export const PopupButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 16px 0 0 0;
`
export const PopupButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: #2082f2;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 6px;
  font-weight: bold;
`
export const PopupOutlineButton = styled(PopupButton)`
  background-color: transparent;
  border: 1.5px solid #93a4b8;
  color: #93a4b8;
`
