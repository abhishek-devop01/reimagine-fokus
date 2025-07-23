import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{ padding: '50px' }}>
      <nav style={{ marginBottom: '30px' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Loader</Link>
        <Link to="/home" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Page</h1>
      <p>Learn more about Fokus - Built for the bold!</p>
      <p>Operating since 2k25</p>
    </div>
  )
}

export default About