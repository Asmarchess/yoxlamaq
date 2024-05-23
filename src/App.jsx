import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Add } from './pages/Add'


function App() {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/add' element={<Add />}/>
      </Routes>
    </>
  )
}

export default App