import React from 'react';
import styled from 'styled-components';
import Side from './Side';
import { Colors } from '../styles/mixins'
const Email = () => {
    const email = 'tttobis@gmail.com'

    const StyledLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

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
      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: ${Colors.yellow}
      }
    }
  `;
  
    return(
    <Side orientation="right">
        <StyledLinkWrapper>
            <a href={`mailto:${email}`}>{email}</a>
        </StyledLinkWrapper>
    </Side>
    )
};



export default Email;