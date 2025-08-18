import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import TopNavbar from './navbar/TopNavbar'

function App() {

  return (
    <>
      <TopNavbar />
      <Home />
    </>
  )
}

export default App
