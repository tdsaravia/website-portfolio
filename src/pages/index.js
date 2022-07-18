import * as React from "react"
import { Hero, Layout, About, Experience, Projects, Contact } from '../components'
import NavProvider from '../components/context/NavContext';
import GlobalStyle from '../GlobalStyle.js'
// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle/>
      <NavProvider>
        <Layout>
          <Hero/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </Layout>
      </NavProvider>
    </>
  )
}

export default IndexPage
