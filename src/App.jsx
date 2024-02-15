import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import VideoListPage from './Pages/VideoListPage'

//data
import wifoIIaData from './data/wifoIIaData'
import wifoIIbData from './data/wifoIIbData'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <div className="wifo-site">
        <Navbar/>
        <Routes>
          <Route 
            path='/' 
            element={<HomePage/>}
          />
          <Route 
            path='/videos-a' 
            element={<VideoListPage data={wifoIIaData} siteTitle='Wirtschaftsinformatik II a'/>}
          />
          <Route 
            path='/videos-b' 
            element={<VideoListPage data={wifoIIbData} siteTitle='Wirtschaftsinformatik II b'/>}
          />
          <Route
            path='*'
            element={<ErrorPage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
