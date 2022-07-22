import * as React from "react"
import { Hero, Layout, About, Experience, Projects, Contact } from '../components'
import NavProvider from '../components/context/NavContext';
import GlobalStyle from '../GlobalStyle.js'
import Social from '../components/Social'
// markup
const IndexPage = () => {

  return (
    <>
      <GlobalStyle/>
      <NavProvider>
        <Layout>
        <Social>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
        </Social>
        </Layout>
      </NavProvider>
    </>
  )
}

export default IndexPage
