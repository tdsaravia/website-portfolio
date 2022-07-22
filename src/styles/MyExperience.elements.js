import styled from 'styled-components'
import { Colors } from './mixins'

export const TopContent = styled.div`
    flex-direction: row;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    padding: 50px 0;
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
export const ContentRow = styled.div`
display: flex;
margin: 0 -15px 15px -30px;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

export const ContentColumn = styled.div`
margin-bottom: 15px;
padding-right: 30px;
padding-left: 30px;
flex: 1;
z-index: 0;
display: flex;
flex-direction: column;
@media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
    padding: 30px;
}
`;
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
