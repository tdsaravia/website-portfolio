import styled from 'styled-components'
import { colors } from './mixins'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    max-width: 1300px;
    margin: 150px;
    @media screen and (max-width:768px) {
        margin: 50px 370px;
        align-items: center;
        max-width: 380px;
    }
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
    color: ${colors.lightGrey};
    margin-right: 25px;
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
    align-items: center;
    @media screen and (max-width:768px) {
        flex-direction:column;
        width:100%;
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
    align-items: flex-start;
    width:50%;
    justify-content: center;
    @media screen and (max-width:768px) {
        width:100%;
    }
`