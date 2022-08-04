import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/tabs.css'
import Fade from 'react-reveal/Fade';


const remigo = [
    'Remigo is a Real Estate startup whose main mission was to facilitate communication between the buyer and the REALTOR through a live chat. It also facilitates the search for properties according to what the client wants thanks to the MLS data search that it offers, where all the data of the properties found in Austin, TX are displayed.',
    'I developed a landing page with React (by using Gatsby). I also implemented new features and worked on fixing bugs for the main website.',
    'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
    'Worked with a variety of different languages, platforms, and frameworks such as JavaScript, TypeScript, Gatsby, React, Next.js, Terraform, GraphQL, Figma, and Netlify.',
]
const hokali = [
    "HOKALI is an online platform that simplifies the process of booking sports lessons and fitness sessions. Their main sport is Surfing, providing a full learning experience for adults and kids. They mainly operate in San Francisco, but they also work in Los Angeles, San Diego, Jacksonville and Oahu.",
    "I developed a forecast web app using React, Firebase and the following APIs: OpenWeatherMap and Storm Glass.",
    'I developed a landing page with React, fixed bugs and used the ActiveCampaign API for subscriptions to newsletters.',
    'Had weekly meetings with my team where we gave our updates and future tasks to be done.'
]
const emerald = [
    'Emerald was a project made by developers with the main objective of developing web pages, mobile applications and backend servers for the personal development of each member of the group. We have carried out projects mainly with React and React Native.',
    'I worked on the development of a bank application with React Native using TypeScript and Expo.',
    'I have designed the screens and user stories of the application and had daily communication with the designers.',
    'I served as the technical support for my co-workers guiding them on how to solve their problems in the frontend section.'
]
const TabJobs = () => {
    return (
        <div>
        <Fade bottom>
        <Tabs>
        <TabList>
          <Tab>
            <p>Remigo</p>
          </Tab>
          <Tab>
            <p>HOKALI</p>
          </Tab>
          <Tab>
            <p>Emerald</p>
          </Tab>

        </TabList>

        <TabPanel>
          <div className="panel-content">
            <div className="title">
            <h2>Jr. Software Engineer <span>Remigo, LLC</span></h2>
            </div>
            <p className="date">Aug 2021 - Jun 2022 (Remote)</p>
            <div className="list-tab">
                {remigo && remigo.map((paragraph, i) => <li key={i}>{paragraph}</li>)}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div className="title">
            <h2>Jr. Web Developer <span>HOKALI</span></h2>
            </div>
            <p className="date">Jan 2021 - Jun 2021 (Remote)</p>
            <div className="list-tab">
                {hokali && hokali.map((paragraph, i) => <li key={i}>{paragraph}</li>)}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <div className="title">
            <h2>Jr. Software Engineer <span>Emerald</span></h2>
            </div>
            <p className="date">Nov 2021 - Mar 2022 (Remote)</p>
            <div className="list-tab">
                {emerald && emerald.map((paragraph, i) => <li key={i}>{paragraph}</li>)}
            </div>
          </div>
        </TabPanel>
      </Tabs>
      </Fade>
    </div>
    )
}

export default TabJobs
