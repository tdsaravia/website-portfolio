import styled from 'styled-components'
import { Colors } from './mixins'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:768px) {
        margin: 50px 370px;
        align-items: center;
        max-width: 380px;
    }
 `
export const Content = styled.div`

`
export const TopContent = styled.div`
    flex-direction: row;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    @media screen and (max-width:768px) {
        max-width: 350px;

    }
    
`

export const Section = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    color: ${Colors.lightGrey};
    margin-right: 25px;
    font-weight: 500;
`

export const Line = styled.div`
  height: 1px;
  background: ${Colors.lightGrey};
  width:20%;
`

export const BottomContent = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    max-width:1000px;
    @media screen and (max-width:768px) {
        flex-direction:column;
        width:100%;
    }
`

export const RightContent = styled.div`
    display:flex;
    flex-direction:column;
    width:400px;
    align-items: center;
    @media screen and (max-width:768px) {
        margin:80px 0px;
        width:100%;
        justify-content: center;
    }
`
export const LeftContent = styled.div`
    display:flex;
    flex-direction:column;
    max-width:500px;
    align-items: center;
    justify-content: flex-start;
    width:50%;
    @media screen and (max-width:768px) {
        width:100%;
    }
`
export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.lightGrey};
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    line-height: 36px;
`
