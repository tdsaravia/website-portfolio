import React from 'react'
import {
    Container,
    TopContent,
    Section,
    Line,
    BottomContent,
    LeftContent,
    Paragraph,
    RightContent,
    Image,
    ImageContainer,
    List
} from '../../styles/About.elements'
import Profile from '../../images/profile.svg'
import { useNav } from '../hooks/useNav'

const content = {
    subtitle: 'About Me',
    p1: 'Hello! My name is Tobias and I enjoy working on interesting projects. I started programming in 2019 while attending at my University (Universidad Tecnológica Nacional). Single page applications and games are my favorite things to working.',
    p2: 'My experience to date, has been working together with two amazing companies, HOKALI and Remigo. I served at both, as a frontend developer and used tool and technologies like:'
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
            <BottomContent>
                <LeftContent>
                    <Paragraph>
                        {content.p1}
                    </Paragraph>
                    <Paragraph>
                        {content.p2}
                    </Paragraph>
                    <List>
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </List>
                </LeftContent>
                <RightContent>
                    <ImageContainer>
                    <Image src={Profile} alt="profile"/>
                    </ImageContainer>
                </RightContent>
            </BottomContent>
        </Container>
        </section>
    )
}

export default About
