import React, { useState } from 'react'
import {NavBar,Footer,MainScreen} from "./components/index"
import { Route,Router,Routes } from 'react-router-dom'


const App = () => {
  const [show,setShow]=useState(false);
  return (
    <div>
    
     {/* <NavBar show={show} setShow={setShow}/> */}
     
       <Routes>
           <Route path="/" element={<MainScreen/>}/>
       </Routes> 
       <Footer/>
    </div>
  )
}

export default App