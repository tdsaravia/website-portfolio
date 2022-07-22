import React from 'react'
import {
    TopContent,
    Section,
    Line,
    ContentRow,
    ContentColumn
} from '../../styles/MyExperience.elements'
import Tabs from '../Tabs'
import { useNav } from '../hooks/useNav'
import { Container } from '../../GlobalStyle'

const content = {
    subtitle: 'My Experience'
}
const Experience = () => {
    const experienceRef = useNav('Experience');


    return (
        <section ref={experienceRef} id='experienceContainer'>
        <Container>
            <TopContent>
                <Section>{content.subtitle}</Section>
                <Line/>
            </TopContent>
            <ContentRow>
                <ContentColumn>
                    <Tabs/>
                </ContentColumn>
            </ContentRow>
        </Container>
        </section>

    )
}

export default Experience
