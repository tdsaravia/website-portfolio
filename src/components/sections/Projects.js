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
	
} from '../../styles/Projects.elements.js'
import project1 from '../../images/e-commerce.svg'
import project2 from '../../images/weather.svg'
import project3 from '../../images/project3.svg'
import project4 from '../../images/bmi-project.svg'

import gh from '../../images/icons/Github.png'
import { Container } from '../../GlobalStyle.js'
import Fade from 'react-reveal/Fade';


const Projects = () => {

    const projectRef = useNav('Project');

    return (

		<section ref={projectRef} id='projectContainer'>
			<Container>
				<TopContainer>
					<Section>Projects</Section>
					<Line/>
				</TopContainer>
				<Fade bottom delay={1}>
				<ContentRow>
					<LeftContainer>
						<ImageContainer>
							<a href='https://e-commerce-pictures.herokuapp.com/' rel="noreferrer" target="_blank">
							<Image src={project1} alt="e-commerce"/>
							</a>
						</ImageContainer>
					</LeftContainer>
					<RightContainer>
						<Title href='https://e-commerce-pictures.herokuapp.com/' rel="noreferrer" target="_blank">E-commerce Website</Title>
						<Box>
							<Description>
							An e-commerce for pictures. It’s a web app where you can filter and sort the images that you want, and add the pics to your cart to buy them.
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
							<a href='https://github.com/tdsaravia/pictures-e-commerce' rel="noreferrer" target="_blank">
								<Icon src={gh} alt="github-icon"/>
							</a>
						</IconContainer>
					</RightContainer>
				</ContentRow>
				</Fade>
				<Fade bottom delay={8}>
				<ContentRow>
					<LeftContainer>
						<TitleReverse href='https://murmuring-mesa-91976.herokuapp.com/' rel="noreferrer" target="_blank">Weather Website</TitleReverse>
						<Box>
							<DescriptionReverse>
								This project is a Tech Task requested by HOKALI where you enter the name of a city to see the weather data for the next 5 days, using OpenWeatherMap as API.
							</DescriptionReverse>
						</Box>
						<SkillsContainerReverse>
							<SkillsReverse>JavaScript</SkillsReverse>
							<SkillsReverse>OpenWeatherMap</SkillsReverse>
							<SkillsReverse>SASS</SkillsReverse>

						</SkillsContainerReverse>
						<IconContainer>
							<a href='https://github.com/tdsaravia/weather-app' rel="noreferrer" target="_blank">
								<Icon src={gh} alt="github-icon"/>
							</a>
						</IconContainer>
					</LeftContainer>
					<RightContainer>
						<ImageContainer>
						<a href='https://murmuring-mesa-91976.herokuapp.com/' rel="noreferrer" target="_blank">
							<Image src={project2} alt="weather"/>
						</a>
						</ImageContainer>
					</RightContainer>
				</ContentRow>
				</Fade>
				<Fade bottom delay={16}>
				<ContentRow>
				<LeftContainer>
					<ImageContainer>
						<a href='https://e-commerce-design.herokuapp.com/' rel="noreferrer" target="_blank">
						<Image src={project3} alt="e-commerce"/>
						</a>
					</ImageContainer>
				</LeftContainer>
				<RightContainer>
					<Title href='https://e-commerce-design.herokuapp.com/' rel="noreferrer" target="_blank">E-commerce Design</Title>
					<Box>
						<Description>
							This is a design for desktop. It is the frontend for an e-commerce, where you can use a carrousel, add objects to the cart and see the cart’s details.
						</Description>
					</Box>
					<SkillsContainer>
						<Skills>React</Skills>
						<Skills>JavaScript</Skills>
						<Skills>Styled Components</Skills>
						<Skills>React Slick</Skills>
					</SkillsContainer>
					<IconContainer>
						<a href='https://github.com/tdsaravia/tobi-shop' rel="noreferrer" target="_blank">
							<Icon src={gh} alt="github-icon"/>
						</a>
					</IconContainer>
				</RightContainer>
			</ContentRow>
			</Fade>
			<Fade bottom delay={8}>
			<ContentRow>
				<LeftContainer>
					<TitleReverse href='https://github.com/tdsaravia/bmi-calculator' rel="noreferrer" target="_blank">BMI Calculator</TitleReverse>
					<Box>
						<DescriptionReverse>
							This is an application where you can calculate your BMI with your Height and Weight. It could be 4 options (Underweight, Normal weight, Overweight and Obese).
						</DescriptionReverse>
					</Box>
					<SkillsContainerReverse>
						<SkillsReverse>JavaScript</SkillsReverse>
						<SkillsReverse>React Native</SkillsReverse>
						<SkillsReverse>Expo</SkillsReverse>

					</SkillsContainerReverse>
					<IconContainer>
						<a href='https://github.com/tdsaravia/bmi-calculator' rel="noreferrer" target="_blank">
							<Icon src={gh} alt="github-icon"/>
						</a>
					</IconContainer>
				</LeftContainer>
				<RightContainer>
					<ImageContainer>
					<a href='https://github.com/tdsaravia/bmi-calculator' rel="noreferrer" target="_blank">
						<Image src={project4} alt="weather"/>
					</a>
					</ImageContainer>
				</RightContainer>
			</ContentRow>
			</Fade>
			</Container>
		</section>
    )
}

export default Projects
