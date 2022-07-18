import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/tabs.css'


const remigo = [
    'Remigo is a Real Estate startup whose main mission was to facilitate communication between the buyer and the REALTOR through a live chat. It also facilitates the search for properties according to what the client wants thanks to the mls search that it offers, where all the data of the properties found in Austin, TX are displayed.',
    'Developed a Landing Page website with React Gatsby, also in new features, and bug fixing for the principal Web App.',
    'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
    'Work with a variety of different languages, platforms, and frameworks such as JavaScript, TypeScript, Gatsby, React, Next.js, Terraform, GraphQL, Figma, and Netlify',
]
const hokali = [
    "HOKALI is a online platform that simplifies the process of booking sports lessons and fitness sessions and their mainly sport is Surfing, providing a full learning experience for adults and kids. Their main location is in San Francisco, but they also stay in Los Angeles, San Diego, Jacksonville and Oahu",
    "I Developed a Forecast web app using React, Firebase and API's(open wheater map and stormglass).",
    'I Developed in the Landing Page made with React, fixing bugs and implementing activeCampaing API for subscriptions to Newsletters',
    'Had weekly meetings with my team where we gave our updates and future tasks to be done'
]
const emerald = [
    'It is a project made by programmers with the main objective of developing pages, mobile applications and back end servers for the personal development of each member of the group. Where we have carried out projects mainly with React and React Native',
    'I Developed a Bank Application with React Native using TypeScript and Expo.',
    'I have designed the screens and user stories of the application and daily communication with the designers',
    'I was technical support for my co-workers guiding them how to solve their problems in the front end section'
]
const TabJobs = () => {
    return (
        <div>
        <Tabs>
        <TabList>
          <Tab>
            <p>Remigo, LLC</p>
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
        </div>
    )
}

export default TabJobs
