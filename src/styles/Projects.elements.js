import styled from 'styled-components'
import { Colors } from './mixins'

export const Container = styled.div`
    justify-content: center;
    display: flex;
    max-width: 1300px;
    width:100%;
    flex-direction: column;
    height:auto;
    padding: 70px 50px;
    @media screen and (max-width:768px) {
        margin: 100px 0px 50px 0px;

    }
`
export const ContentRow = styled.div`
display: flex;
margin: 30px -15px 15px -30px;
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
export const TopContainer = styled.div`
    justify-content: flex-start;
    align-items: center;
    display: flex;
    max-width: 1300px;
    width:100%;
    flex-direction: row;

    @media screen and (max-width:768px) {
        flex-direction: column;
    }
`
export const BottomContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    max-width:1300px;
    align-items: center;
    margin: 50px 0px;
    @media screen and (max-width:768px) {
        flex-direction: column;
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
export const LeftContainer = styled.div`
    display: flex;
    position:relative;
    justify-content: flex-start;
    align-items: flex-start;
    width:49%;
    max-width:600px;
    flex-direction: column;
    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
        align-items: center;
}
`
export const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    max-width:600px;
`
export const Image = styled.img`
    max-width:600px;
    height: auto;
    position:relative;
    width:100%;
    @media screen and (max-width:768px) {
        display: none;
}
`
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width:49%;
    max-width:600px;

    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
        align-items: center;
}
`

export const Title = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 20px;
    color: ${Colors.yellow};
    font-weight: 400;
    text-align:flex-end;
    padding: 20px 0px;
    @media screen and (max-width:768px) {
        font-size: 16px;

    }
`
export const Box = styled.div`
    display: flex;
    max-width:600px;
    background-color: #373737;
    border: none;
    border-radius: 10px;
    height:200px; 
    align-items: center;
    justify-content: center;
    padding:0px 30px;
    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
        align-items: center;
        max-width:300px;
        max-height:550px;
}
`

export const Description = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 20px;
    color: ${Colors.white};
    font-weight: 400;
    text-align: right;
    background-color: #373737;
    @media screen and (max-width:768px) {
        font-size: 16px;

    }
`
export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    margin:15px 0px 15px 20px;
    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
        align-items: center;
        max-width:300px;
        grid-template-columns: repeat(2, minmax(140px, 200px));

}
    
`
export const Skills = styled.div`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1rem;
    color: ${Colors.white};
    font-weight: 300;
    text-align:flex-end;
    margin-left: 20px;
    @media screen and (max-width:768px) {
        width:100%;
        justify-content: center;
        align-items: center;
        max-width:300px;
        grid-template-columns: repeat(2, minmax(140px, 200px));

}
`
export const IconContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`
export const Icon = styled.img`
    width:30px;
    width:30px;
    cursor:pointer;
`

export const TitleReverse = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 20px;
    color: ${Colors.yellow};
    font-weight: 400;
    text-align:flex-start;
    padding: 20px 0px;

    @media screen and (max-width:768px) {
        font-size: 16px;
    }
`

export const DescriptionReverse = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 20px;
    color: ${Colors.white};
    font-weight: 400;
    text-align: left;
    background-color: #373737;
    @media screen and (max-width:768px) {
        font-size: 16px;
    }
`
export const SkillsContainerReverse = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    @media screen and (max-width:768px) {
        justify-content:center;
    }
`
export const SkillsReverse = styled.div`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 1rem;
    color: ${Colors.white};
    font-weight: 300;
    text-align:flex-start;
    margin-right: 20px;
    margin:15px 20px 15px 0px;

    @media screen and (max-width:768px) {
        text-align:center;
    }
`

export const CoomingSoon = styled.p`
    font-size: 3rem;
    color:#000;
    position:absolute; 
    background-color:transparent; 
    top:40%;
    justify-content:center; 
    align-items:center;
    font-family:'Inter', sans-serif;
    font-weight:bold;

    @media screen and (max-width:960px) {
        display: none;
    }
`