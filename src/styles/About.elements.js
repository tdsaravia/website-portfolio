import styled from 'styled-components'
import { colors } from './mixins'

export const Container = styled.div`
    justify-content: center;
    display: flex;
    max-width: 1300px;
    width:100%;
    flex-direction: column;
    padding: 70px 50px;

    @media screen and (max-width:768px) {
        padding: 0px 400px;
        max-width:350px;
        align-items: center;
    }
 `

export const TopContent = styled.div`
    flex-direction: row;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width:100%;
    @media screen and (max-width:768px) {
        max-width: 400px;
    }
`

export const Section = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    color: ${colors.lightGrey};
    margin-right: 20px;
    font-weight: 500;
`
export const Line = styled.div`
  height: 1px;
  background: ${colors.lightGrey};
  width:20%;
`

export const BottomContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    max-width:1300px;
    @media screen and (max-width:768px) {
        flex-direction:column;
        justify-content: center;
        align-items: center;
        max-width: 400px;
    }
`

export const LeftContent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:500px;
    align-items: flex-start;
    width:50%;
    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
    }
`

export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${colors.lightGrey};
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    line-height: 36px;
`

export const RightContent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:600px;
    align-items: center;
    width:50%;
    @media screen and (max-width:768px) {
        margin:80px 0px;
        width:100%;
        justify-content: center;
    }
`
export const ImageContainer = styled.div`
    width:300px;
    height:300px;
    border-radius: 10px;
    border: 2px solid ${colors.yellow};
    background-color: ${colors.black};
    z-index: -1;

`
export const Image = styled.img`
    width:300px;
    height:300px;
    border-radius: 10px;
    z-index: 3;    filter: grayscale(50%) contrast(1);
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color:${colors.lightGrey};
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: 'Roboto Mono', sans-serif;
      font-size: 16px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${colors.yellow};
        font-size: 16px;
      }
    }
`