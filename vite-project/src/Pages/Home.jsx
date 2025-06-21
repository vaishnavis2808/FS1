import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'
const Home = () => {
  return (
    <div>
    <h1>Home Page</h1>
 <Welcome name='Vaishnavi'/> 
<Skills skill={['React','Node','Express','MangoDB']}/>
   <h1>Have a great day!</h1>

    
</div>
  )
}

export default Home