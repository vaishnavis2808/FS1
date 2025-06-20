import React from 'react'
import State from '../hooks/State'

import { Link } from 'react-router-dom'
const About=()=> {
  return (
    <div>
        <Link to='/state'>UserState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link> <br />
        <Link to='/effect'>UseEffect Example</Link>
      
    </div>
  )
}

export default About