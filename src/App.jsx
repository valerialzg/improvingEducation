import React from 'react'
import Header from './components/header/Header'
import Topbar from './components/topbar/topbar'
import Intro from './components/intro/Intro'
import CTA from './components/header/CTA'
import Teacher from './components/teacher/Teacher'
import Student from './components/student/Student'
import { Routes, Route } from 'react-router-dom'
import Universities from './components/universities/Universities'


const App = () => {
  return (
    <>
      <Routes> 
        <Route path='/' element={< Header /> } />  
        <Route path='/student' element={< Student /> } /> 
        <Route path='/teacher' element={< Teacher /> } /> 
        <Route path='/universities' element={< Universities /> } /> 

      </Routes>

      <Topbar />

    </>
  )
}

export default App