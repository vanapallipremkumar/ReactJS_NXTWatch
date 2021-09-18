import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default null

export const LinkContainer = styled.li`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const LinkName = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 22px;
  color: ${props => props.color};
`
export const MenuLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 10px 150px;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media (min-width: 768px) {
    padding: 10px 40px;
    justify-content: flex-start;
  }
`
