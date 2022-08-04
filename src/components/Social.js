import React from 'react';
import styled from 'styled-components';
import Side from './Side';
import { Colors } from '../styles/mixins'
import Ig from '../images/icons/Instagram.png'
import Lid from '../images/icons/LinkedIn.png'
import Git from '../images/icons/Github.png'
import Tw from '../images/icons/Twitter.png'

const Social = ({children}) => {

    const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    z-index: 999;
    background-color: transparent;

    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: ${Colors.grey};
    }
    li {
      background-color: transparent;
      &:last-of-type {
        margin-bottom: 20px;
      }
      a {
        padding: 10px;
        background-color: transparent;
        img {
          width: 20px;
          height: 20px;
          margin-bottom:20px;
          background-color: transparent;
          transition: 0.2s ease-in;
            &:hover,
            &:focus {
            transform: translateY(-6px);
            }
        }
      }
    }
  `;

const StyledLinkWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
z-index: 999;
background-color: transparent;
&:after {
  content: '';
  display: block;
  width: 1px;
  height: 90px;
  margin: 0 auto;
  background-color:${Colors.grey};
}

a {
  margin: 20px auto;
  padding: 10px;
  font-family: 'Roboto Mono', sans-serif;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  color:${Colors.grey};
  background-color: transparent;
  transition: 0.2s ease-in;

  &:hover,
  &:focus {
    transform: translateY(-6px);
    color: ${Colors.yellow};
  }
}
`;
  
    return(
    <>
    <Side orientation="left">
        <StyledSocialList>
            <li>
                <a href='https://www.instagram.com/tcoder10/' target="_blank" rel="noreferrer">
                    <img src={Ig} alt='icon'/>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/tobias-saravia-1b2105195/' target="_blank" rel="noreferrer">
                    <img src={Lid} alt='icon'/>
                </a>
            </li>
            <li>
                <a href='https://github.com/tobii-saravia' target="_blank" rel="noreferrer">
                    <img src={Git} alt='icon'/>
                </a>
            </li>
            <li>
                <a href='https://twitter.com/TobiasSaravia8' target="_blank" rel="noreferrer">
                    <img src={Tw} alt='icon'/>
                </a>
            </li>
        </StyledSocialList>
    </Side>
      <div>{children}</div>
      <Side orientation="right">
        <StyledLinkWrapper>
            <a href={`mailto:tttobis@gmail.com`}>tttobis@gmail.com</a>
        </StyledLinkWrapper>
    </Side>
    </>
    )
};



export default Social;