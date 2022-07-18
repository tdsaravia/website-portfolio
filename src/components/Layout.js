import React from 'react'
import Navbar from './Navbar/Navbar'
import Seo from './seo'
import Email from './Email'
import Social from './Social'
import Footer from './Footer'


const Layout = ({children}) => {
   return
    (
        <div>
          <Seo/>
          <Navbar/>  
          <Email/>
          <Social/>
          <main>
            {children}
          </main>
          <Footer/>
        </div>
    )
}

export default Layout