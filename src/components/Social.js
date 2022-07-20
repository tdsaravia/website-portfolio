import React from 'react';
import styled from 'styled-components';
import Side from './Side';
import { Colors } from '../styles/mixins'
import Ig from '../images/icons/Instagram.png'
import Lid from '../images/icons/LinkedIn.png'
import Git from '../images/icons/Github.png'
import Tw from '../images/icons/Twitter.png'

const Social = () => {

    const StyledSocialList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    &:after {
      content: '';
      display: block;
      width: 1px;
      height: 90px;
      margin: 0 auto;
      background-color: ${Colors.grey};
    }
    li {
      &:last-of-type {
        margin-bottom: 20px;
      }
      a {
        padding: 10px;
        img {
          width: 20px;
          height: 20px;
          margin-bottom:20px;
            &:hover,
            &:focus {
            transform: translateY(-3px);
            }
        }
      }
    }
  `;
  
    return(
    <Side orientation="left">
        <StyledSocialList>
            <li>
                <a href='https://www.instagram.com/tobiisaravia/' target="_blank" rel="noreferrer">
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
    )
};



export default Social;