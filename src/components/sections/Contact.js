import React from 'react'
import {
    Content,
    RobotoText,
    Title,
    InterText,
    Button
} from '../../styles/Contact.elements'
import { useNav } from '../hooks/useNav';
import { Container } from '../../GlobalStyle'
const content = {
    question: 'Whats next?',
    title: 'Get in Touch',
    p1: 'I am currently opening to hearing about new opportunities! Whether you just want to say, hello, or have a project, my inbox is always open!',
}
const Contact = () => {

    const contactRef = useNav('Contact');

    return (
        <Container ref={contactRef} id='contactContainer'>
            <Content>
                <RobotoText>{content.question}</RobotoText>
                <Title>{content.title}</Title>
                <InterText>{content.p1}</InterText>
                <Button>
                    <a href={'mailto:tttobis@gmail.com'}>
                        {content.title}
                    </a>
                </Button>    
            </Content>
        </Container>

    )
}

export default Contact
