import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Header from './Header'
import SubHeader1 from './SubHeader1'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <SubHeader1 />
    </div>
  )
}

export default Home