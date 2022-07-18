import React from 'react'
import {
    Container,
    RobotoText,
    Title,
    InterText,
    Button
} from '../../styles/Contact.elements'
import { useNav } from '../hooks/useNav';

const content = {
    question: 'Whats next?',
    title: 'Get in Touch',
    p1: 'I am currently opening to hearing about new opportunities! Whether you just want to say, hello, or have a project, my inbox is always open!',
    button: 'Get in Touch'
}
const Contact = () => {

    const contactRef = useNav('Contact');

    return (
        <section ref={contactRef} id='contactContainer'>
        <Container>
            <RobotoText>{content.question}</RobotoText>
            <Title>{content.title}</Title>
            <InterText>{content.p1}</InterText>
            <Button>{content.button}</Button>    
        </Container>
        </section>

    )
}

export default Contact
