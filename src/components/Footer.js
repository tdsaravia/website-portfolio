import React from 'react'
import styled from 'styled-components'
import { Colors } from '../styles/mixins'

const Container = styled.div`
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
            <Name>
                Tobias Saravia
            </Name>
        </Container>
    )
}

export default Footer
