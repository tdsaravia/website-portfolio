import React from "react"
import { Layout } from '../components'
import NavProvider from '../components/context/NavContext';
import GlobalStyle from '../GlobalStyle.js'


const NotFoundPage = () => {
  return (
    <>
    <GlobalStyle/>
    <NavProvider>
      <Layout>
          <div>
            <h1>404 Page Not found</h1>
          </div>
      </Layout>
    </NavProvider>
    </>
  )
}

export default NotFoundPage
