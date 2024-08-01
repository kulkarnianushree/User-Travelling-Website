import React from 'react'
import Form from '../Components/Home/Form'
import Navigation from '../Components/Navigation/Navigation'
import Home from '../Components/Home/Home'
import Explore from '../Components/Home/Explore'
import Destination from '../Components/Home/Destination'
const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Form></Form>
        <Explore/>
        <Destination/>
    </div>
  )
}

export default HomePage