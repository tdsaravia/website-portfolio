import styled from 'styled-components'
import { Colors } from  './mixins.js'

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 1300px;
    width:100%;
    height:80vh;


`
export const Content = styled.div`
    max-width:650px;
    max-height: 500px;
    padding:90px 0px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    @media screen and (max-width:768px) {
        max-width:350px;
        padding:40px 0px;
    }
`
export const RobotoText = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    color: ${Colors.yellow};
    font-size: 18px;
    font-weight: 300;
    text-align: left;
    @media screen and (max-width:768px) {
        font-size: 16px;
    }
`
export const Title = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.lightYellow};
    font-size: 64px;
    font-weight: bold;
    text-align: left;
    margin-top:-10px;
    @media screen and (max-width:768px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.white};
    font-size: 48px;
    font-weight: bold;
    text-align: left;
    margin-top:-35px;
    @media screen and (max-width:768px) {
        font-size: 28px;
    }
`
export const InterText = styled.p`
    font-family: 'Inter', sans-serif;
    color:${Colors.lightGrey};
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    margin-top:-10px;
    line-height: 36px;
    @media screen and (max-width:768px) {
        font-size: 18px;
    }
`