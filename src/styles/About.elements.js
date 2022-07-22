import styled from 'styled-components'
import { Colors } from './mixins'


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

export const TopContent = styled.div`
    flex-direction: row;
    display:flex;
    align-items: center;
    justify-content: flex-start;
    width:100%;
    max-width:1300px;
    
    @media screen and (max-width:768px) {
        max-width: 400px;
    }
`

export const Section = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    color: ${Colors.lightGrey};
    margin-right: 20px;
    font-weight: 500;
`
export const Line = styled.div`
  height: 1px;
  background: ${Colors.lightGrey};
  width:20%;
`


export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    color: ${Colors.lightGrey};
    font-size: 20px;
    font-weight: 300;
    text-align: left;
    line-height: 36px;
`


export const ImageContainer = styled.div`
    width:300px;
    height:300px;
    border-radius: 10px;
    border: 2px solid ${Colors.yellow};
    background-color: ${Colors.black};
    z-index: -1;
    margin-left: 200px;
    @media screen and (max-width:960px) {
        margin-left: 0;
    }
`
export const Image = styled.img`
    width:300px;
    height:300px;
    border-radius: 10px;
    z-index: 3;    
    filter: grayscale(50%) contrast(1);
    position:absolute;
    margin-top:-20px;
    margin-left: -30px;
`

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 10px 0;
    overflow: hidden;
    list-style: none;
    color:${Colors.lightGrey};
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
        color: ${Colors.yellow};
        font-size: 16px;
      }
    }
`