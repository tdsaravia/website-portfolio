import React from 'react'
import {
    TopContent,
    Section,
    Line,
    ContentRow,
    Paragraph,
    Image,
    ImageContainer,
    ContentColumn,
    List
} from '../../styles/About.elements'
import Profile from '../../images/profile.svg'
import { useNav } from '../hooks/useNav'
import { Container } from '../../GlobalStyle'
import Fade from 'react-reveal/Fade';



const content = {
    subtitle: 'About Me',
    p1: 'I am a software developer who enjoys working on interesting projects. I started programming in 2019 while attending at my University (Universidad Tecnológica Nacional). Single page applications, mobiles applications and Web Apps are my favorite things to work with.',
    p2: 'My experience to date, has been working together with two amazing companies, HOKALI and Remigo. I served at both, as a Frontend Developer and used tool and technologies like:'
}
const skills = ['TypeScript', 'JavaScript (ES6+)', 'React', 'Gatsby', 'Node.js', 'Next.js', 'React Native', 'Firebase'];




const About = () => {
    
    const aboutRef = useNav('About');
    
    return (
        <section ref={aboutRef} id='aboutContainer'>
        <Container>
            <TopContent>
                <Section>{content.subtitle}</Section>
                <Line/>
            </TopContent>
            <ContentRow>
                <ContentColumn>
                <Fade left delay={4}>
                    <Paragraph>
                        {content.p1}
                    </Paragraph>
                </Fade>
                <Fade left delay={8}>
                    <Paragraph>
                        {content.p2}
                    </Paragraph>
                </Fade>
                
                    <List>
                        {skills && skills.map((skill, i) => <Fade bottom><li key={i}>{skill}</li></Fade>)}
                    </List>
                </ContentColumn>
                <ContentColumn>
                    <Fade right delay={4}>
                    <ImageContainer>
                    <Image src={Profile} alt="profile"/>
                    </ImageContainer>
                    </Fade>
                </ContentColumn>
            </ContentRow>
        </Container>
        </section>
    )
}

export default About
