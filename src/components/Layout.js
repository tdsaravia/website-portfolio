import React from 'react'
import Navbar from './Navbar/Navbar'
import Seo from './seo'
import Footer from './Footer'

const Layout = ({children}) => {
   return (
        <>
            <Seo/>
            <Navbar/>  
            <main>
              {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout