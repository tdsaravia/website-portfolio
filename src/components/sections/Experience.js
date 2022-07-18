import React from 'react'
import {
    Container,
    TopContent,
    Section,
    Line,
    BottomContent,


} from '../../styles/MyExperience.elements'
import Tabs from '../Tabs'
import { useNav } from '../hooks/useNav'


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
            <BottomContent>
                <Tabs/>
            </BottomContent>
        </Container>
        </section>

    )
}

export default Experience
