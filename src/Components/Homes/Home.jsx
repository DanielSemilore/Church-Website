import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import SubHeader1 from './SubHeader1'
import SubHeader2 from './SubHeader2'
import SubHeader3 from './SubHeader3'
import SubHeader4 from './SubHeader4'
import SubHeader5 from './SubHeader5'
import SubHeader6 from './SubHeader6'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SubHeader1 />
      <SubHeader2 />
      <SubHeader3 />
      <SubHeader4 />
      <SubHeader5 />
      <SubHeader6 />
      <Footer />
    </div>
  )
}

export default Home