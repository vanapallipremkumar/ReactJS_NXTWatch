import styled from 'styled-components'

export default null

export const LoginPage = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => (props.dark ? '#212121' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.dark ? '#0F0F0F' : '#ffffff')};
  box-shadow: 0 0 40px rgba(120, 120, 120, 0.1);
  border-radius: 10px;
  @media (min-width: 768px) {
    box-shadow: 0 0 0 20px rgba(200, 200, 200, 0.1);
  }
`
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 150px;
  }
`

export const InputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  background-color: transparent;
`
export const InputFieldLabel = styled.label`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 0 0 6px 0;
  color: ${props => (props.dark ? '#ffffff' : '#94a3b8')};
`
export const InputField = styled.input`
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  padding: 10px 16px;
  border-radius: 4px;
  border: 1.5px solid #94a3b8;
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`
export const CheckBox = styled.input`
  zoom: 1.5;
  margin-right: 6px;
`
export const CheckBoxLabel = styled(InputFieldLabel)`
  color: ${props => (props.dark ? '#ffffff' : '#000000')};
  margin: 0;
  font-family: 'Roboto';
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  color: #ffffff;
  background-color: #2082f2;
  font-family: 'Roboto';
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 0 6px 0;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
`
