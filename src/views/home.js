import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Solutions Agent</title>
        <meta property="og:title" content="International Solutions Agent" />
      </Helmet>
    </div>
  )
}

export default Home
