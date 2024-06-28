import React from 'react'
import {NavBar,Footer,MainScreen} from "./components/index"
import { Route,Router,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
    
     <NavBar/>
       <Routes>
           <Route path="/" element={<MainScreen/>}/>
       </Routes> 
    </div>
  )
}

export default App