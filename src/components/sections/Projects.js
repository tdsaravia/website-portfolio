import React from 'react'
import { useNav } from '../hooks/useNav';
import {
	TopContainer,
	ContentRow,
	LeftContainer,
	RightContainer,
	Section,
	Line,
	ImageContainer,
	Image,
	Title,
	Description,
	Box,
	SkillsContainer,
	Skills,
	IconContainer,
	Icon,
	TitleReverse,
	DescriptionReverse,
	SkillsContainerReverse,
	SkillsReverse,
	CoomingSoon
} from '../../styles/Projects.elements.js'
import project1 from '../../images/e-commerce.svg'
import project2 from '../../images/weather.svg'
import gh from '../../images/icons/Github.png'
import { Container } from '../../GlobalStyle.js'


const Projects = () => {

    const projectRef = useNav('Project');

    return (

		<section ref={projectRef} id='projectContainer'>
			<Container>
				<TopContainer>
					<Section>Projects</Section>
					<Line/>
				</TopContainer>
				<ContentRow>
					<LeftContainer>
						<ImageContainer>
							<Image src={project1} alt="e-commerce"/>
						</ImageContainer>
					</LeftContainer>
					<RightContainer>
						<Title>E-commerce Website</Title>
						<Box>
							<Description>
							An e-commerce pictures. It’s a web app where you can filter and sort the images that you want, and add the pics in your cart to buy it.
							</Description>
						</Box>
						<SkillsContainer>
							<Skills>React</Skills>
							<Skills>Typescript</Skills>
							<Skills>Node.js</Skills>
							<Skills>Firebase</Skills>
							<Skills>SASS</Skills>
						</SkillsContainer>
						<IconContainer>
							<a href='https://github.com/tobii-saravia/bejamas-task'>
								<Icon src={gh} alt="github-icon"/>
							</a>
						</IconContainer>
					</RightContainer>
				</ContentRow>
				<ContentRow>
					<LeftContainer>
						<TitleReverse>Weather Website</TitleReverse>
						<Box>
							<DescriptionReverse>
								A weather app where you can search the weather of the week from one city
							</DescriptionReverse>
						</Box>
						<SkillsContainerReverse>
							<SkillsReverse>JavaScript</SkillsReverse>
							<SkillsReverse>Openweathermap</SkillsReverse>
							<SkillsReverse>SASS</SkillsReverse>

						</SkillsContainerReverse>
						<IconContainer>
							<a href='https://github.com/tobii-saravia/weather-app'>
								<Icon src={gh} alt="github-icon"/>
							</a>
						</IconContainer>
					</LeftContainer>
					<RightContainer>
						<ImageContainer>
							<Image src={project2} alt="weather"/>
						</ImageContainer>
					</RightContainer>
				</ContentRow>
				<ContentRow>
				<LeftContainer>
					<ImageContainer>
						<Image src={project1} alt="e-commerce"/>
						<CoomingSoon>Cooming Soon!</CoomingSoon>

					</ImageContainer>
				</LeftContainer>
				<RightContainer>
					<Title>E-commerce Design</Title>
					<Box>
						<Description>
						This is a design for desktop. It is an e-commerce developed the front end section, where you can use the carrousel, add objects to the cart and see the purchases.
						</Description>
					</Box>
					<SkillsContainer>
						<Skills>React</Skills>
						<Skills>JavaScript</Skills>
						<Skills>Styled Components</Skills>
						<Skills>React Slick</Skills>
					</SkillsContainer>
					<IconContainer>
						<a href='https://github.com/tobii-saravia/tobi-shop'>
							<Icon src={gh} alt="github-icon"/>
						</a>
					</IconContainer>
				</RightContainer>
			</ContentRow>
			</Container>
		</section>
    )
}

export default Projects
