import React from 'react'
import Form from '../Components/Home/Form'
import Navigation from '../Components/Navigation/Navigation'
import Home from '../Components/Home/Home'
import Explore from '../Components/Home/Explore'
import Destination from '../Components/Home/Destination'
import Recent from '../Components/Home/Recent'
const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Home/>
        <Form></Form>
        <Explore/>
        <Recent/>
        <Destination/>
    </div>
  )
}

export default HomePage