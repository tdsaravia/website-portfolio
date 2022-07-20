import React from 'react'
import {
    Container,
    TopContent,
    Section,
    Line,
    BottomContent,
    Content,
    LeftContent,
    RightContent

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
            <Content>
            <TopContent>
                <Section>{content.subtitle}</Section>
                <Line/>
            </TopContent>
            <BottomContent>
                <LeftContent>
                    <Tabs/>
                </LeftContent>
                <RightContent>
                </RightContent>
            </BottomContent>
            </Content>
        </Container>
        </section>

    )
}

export default Experience
