import styled from 'styled-components'
import { Colors } from './mixins'

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 150px 0px;
`

export const RobotoText = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    color: ${Colors.yellow};
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    margin-top: 50px;
`
export const Title = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.white};
    font-size: 64px;
    font-weight: bold;
    text-align: center;

`
export const InterText = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.lightGrey};
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    line-height: 36px;
    max-width:700px;
`

export const Button = styled.button`
    border: 2px solid ${Colors.yellow};
    width:165px;
    height:69px;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono', sans-serif;
    background-color: transparent;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 80px;
    &:hover {
    color: ${Colors.yellow};
    transition: 0.3s all ease;
    background-color: rgb(255,199,0,0.2);
  }
  a {
      text-decoration:none;
      background-color: transparent;
      color: ${Colors.yellow};
  }
  @media screen and (max-width: 960px) {
    margin-left:0px;
  }
`

