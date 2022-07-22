import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/mixins'
import { Container } from '../GlobalStyle'

const Content = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    max-width:1300px;
    justify-content:center;
`

const Name = styled.p`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 16px;
    text-align: center;
    color: ${Colors.grey};
    margin-bottom: 60px; 
`

const Footer = () => {
    return (
        <Container>
            <Content>
                <Name>
                    Tobias Saravia
                </Name>
            </Content>
        </Container>
    )
}

export default Footer
