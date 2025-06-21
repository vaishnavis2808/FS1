import React, { useContext } from 'react'
import State from '../hooks/State'

import { Link } from 'react-router-dom'
import { UserContext } from '../hooks/UserContext'
const About=()=> {
  const user=useContext(UserContext)
  return (
    <div>
      <h1>Hi {user.Name}</h1>
      <p>Age: {user.Age}</p>
      <p>Department: {user.Department}</p>
        <Link to='/state'>UserState Example</Link> <br />
        <Link to='/form'>Controlled Form</Link> <br />
        <Link to='/effect'>UseEffect Example</Link><br />
      <Link to='/reducer'>Reducer Example</Link>
    </div>
  )
}

export default About